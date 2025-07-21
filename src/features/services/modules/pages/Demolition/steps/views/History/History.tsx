import styles from "./History.module.css";
import { Button } from "@/components/custom/Button/Button";
import { FileInput } from "@/components/custom/FileInput/FileInput";

export const History = () => {
	return (
		<div className={styles.content}>
			<div>
				<FileInput label="Planos de Ubicación" required />
				<FileInput label="Planos de Arquitectura" required />
				<FileInput label="Planos de Sostenimiento" required />
				<FileInput label="Planos de Cercos" required />
				<FileInput label="Planos de Excavaciones" required />
				<FileInput label="Partida Registral" required />
				<FileInput label="FUE" required />
			</div>
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</div>
	);
};
