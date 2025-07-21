import styles from "./Textarea.module.css";
import { InputTextarea, type InputTextareaProps } from "primereact/inputtextarea";

interface InputProps extends InputTextareaProps {
	label?: string;
	direction?: "row" | "column";
	success?: boolean;
	error?: boolean;
}
export const Textarea = ({
	label,
	direction = "column",
	success = false,
	error = false,
	className,
	...rest
}: InputProps) => {
	const inputClassName = `${styles.inputtext} ${success ? styles.success : ""} ${
		error ? styles.error : ""
	} ${className || ""}`;

	return (
		<div className={styles.input__container} data-direction={direction}>
			{label && <label>{label}</label>}
			<InputTextarea
				className={inputClassName}
				cols={rest.cols || 7}
				rows={rest.rows || 7}
                autoResize
				{...rest}
			/>
		</div>
	);
};
