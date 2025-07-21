import { File } from "lucide-react";
import styles from "./Card.module.css";
import { ProgressBar } from "@/components/custom/ProgressBar/ProgressBar";
import { Tooltip } from "primereact/tooltip";

interface CardProps {
	title: string;
	expediente: string;
	client: string;
	status: string;
	documents: string[];
	progressValue: number;
}

export const Card = ({
	title,
	expediente,
	client,
	status,
	documents,
	progressValue,
}: CardProps) => {
	const remainingDocuments = documents.slice(5);

	return (
		<div className={styles.content}>
			<div className={styles.title__container}>
				<div className={styles.info__container}>
					<h2>{title}</h2>
					<label>{"Expediente: " + expediente}</label>
					<label>{"Cliente: " + client}</label>
				</div>
				<div className={styles.state__container}>
					<p>{status}</p>
				</div>
			</div>
			<div className={styles.document__container}>
				<h4>Documentos disponibles: </h4>
				<div className={styles.taglist}>
					{documents.slice(0, 5).map((doc, index) => {
						return (
							<div className={styles.tag} key={index}>
								<File size={15} color="black" />
								<label>{doc}</label>
							</div>
						);
					})}
					{documents.length > 5 && (
						<>
							<Tooltip target=".remaining-docs-tooltip" position="bottom">
								{remainingDocuments.map((doc, index) => (
									<div key={index} style={{ padding: "3px" }}>
										{doc} <br />
									</div>
								))}
							</Tooltip>
							<div className={`${styles.tag} remaining-docs-tooltip`}>
								<label>+{documents.length - 5}</label>
							</div>
						</>
					)}
				</div>
			</div>
			<div className={styles.progress}>
				<div>
					<ProgressBar label="Completado: " max={100} value={progressValue} />
				</div>
			</div>
		</div>
	);
};
