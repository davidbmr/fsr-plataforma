import styles from "./FileInput.module.css";
import { useRef, useState, useEffect } from "react";
import { File as FileIcon, CheckCircle, X, Eye, InfoIcon } from "lucide-react";

type FileExtension =
	| "pdf"
	| "doc"
	| "docx"
	| "xls"
	| "xlsx"
	| "ppt"
	| "pptx"
	| "txt"
	| "jpg"
	| "jpeg"
	| "png"
	| "gif"
	| "bmp"
	| "mp3"
	| "mp4"
	| "zip"
	| "rar";
type Extensions = FileExtension[];

interface FileInputProps {
	label: string;
	description?: string;
	required?: boolean;
	value?: File | null;
	onChange?: (field: string, value: File | null) => void;
	onBlur?: (field: string) => void;
	notExcludeExtensions?: Extensions;
	errorMessage?: string;
	name?: string;
	onDelete?: boolean;
	onEye?: boolean;
	error?: string;
	touched?: boolean;
}

export const FileInput = ({
	label,
	description,
	required = false,
	value,
	onChange,
	onBlur,
	notExcludeExtensions = [],
	errorMessage = "Tipo de archivo no permitido",
	name = "",
	onDelete = true,
	onEye = true,
	error,
	touched,
}: FileInputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [internalFile, setInternalFile] = useState<File | null>(null);
	const [internalError, setInternalError] = useState("");

	const currentFile = value !== undefined ? value : internalFile;
	const displayError = error || internalError;

	useEffect(() => {
		setInternalError("");
	}, [currentFile]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;
		if (file) {
			const ext = file.name.split(".").pop()?.toLowerCase();
			if (
				ext &&
				notExcludeExtensions.length > 0 &&
				!notExcludeExtensions.map((e) => e.toLowerCase()).includes(ext as FileExtension)
			) {
				setInternalError(errorMessage);
				if (onChange) onChange(name, null);
				if (!(value !== undefined)) setInternalFile(null);
				return;
			}
			setInternalError("");
			if (onChange) onChange(name, file);
			if (!(value !== undefined)) setInternalFile(file);
		}
	};

	const handleRemove = () => {
		setInternalError("");
		if (onChange) onChange(name, null);
		if (!(value !== undefined)) setInternalFile(null);
		if (inputRef.current) inputRef.current.value = "";
	};

	const handleView = () => {
		if (currentFile) {
			const fileUrl = URL.createObjectURL(currentFile);
			const ext = currentFile.name.split(".").pop()?.toLowerCase();

			if (ext === "pdf") {
				window.open(fileUrl, "_blank");
			} else {
				const link = document.createElement("a");
				link.href = fileUrl;
				link.download = currentFile.name;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
			URL.revokeObjectURL(fileUrl);
		}
	};

	return (
		<div className={styles.fileinput__container}>
			<div className={styles.title__container}>
				<div className={styles.label__container}>
					<label className={styles.fileinput__label}>
						<FileIcon size={20} color="#007C88" style={{ marginRight: 8 }} />
						<span>
							{label} {required && <span style={{ color: "red" }}>*</span>}
						</span>
					</label>
					{currentFile ? (
						<CheckCircle width={25} height={25} color="#4ade80" style={{ float: "right" }} />
					) : (
						<InfoIcon color="#ff8000" width={25} height={25} style={{ float: "right" }} />
					)}
				</div>
				{description && <div className={styles.fileinput__description}>{description}</div>}
			</div>
			<div className={styles.fileinput__inputWrapper}>
				<label
					className={`${styles.fileinput__emptyBox} ${
						currentFile ? styles.hidden : styles.visible
					}`}
				>
					<FileIcon size={20} color="#007C88" style={{ marginRight: 8 }} />
					<span className={styles.fileinput__placeholder}>Seleccione archivo</span>
					<input
						ref={inputRef}
						type="file"
						className={styles.fileinput__inputHidden}
						onChange={handleFileChange}
						onBlur={() => onBlur && onBlur(name)}
						aria-label={label}
						name={name}
					/>
				</label>
				<div
					className={`${styles.fileinput__fileBox} ${currentFile ? styles.visible : styles.hidden}`}
				>
					<FileIcon size={20} color="#007C88" style={{ marginRight: 8 }} />
					<span className={styles.fileinput__fileName}>{currentFile ? currentFile.name : ""}</span>
					<div className={styles.fileinput__actions}>
						{onEye && (
							<button type="button" className={styles.fileinput__viewBtn} onClick={handleView}>
								<Eye size={16} /> <span style={{ color: "#007C88", marginLeft: 4 }}>Ver</span>
							</button>
						)}
						{onDelete && (
							<button type="button" className={styles.fileinput__removeBtn} onClick={handleRemove}>
								<X size={16} /> <span style={{ color: "red", marginLeft: 4 }}>Eliminar</span>
							</button>
						)}
					</div>
				</div>
			</div>
			{displayError && touched && <div className={styles.fileinput__error}>{displayError}</div>}
		</div>
	);
};
