import styles from "./Response.module.css";
import { Button } from "@/components/custom/Button/Button";
import { FileInput } from "@/components/custom/FileInput/FileInput";

export const Response = () => {
	return (
		<div className={styles.content}>
			<div>
				<FileInput label="Respuesta de la Municipalidad" required />
				<FileInput label="Partida Registral" required />
			</div>
			<div className={styles.footer__button}>
				<Button label="Conformar" />
				<Button label="Guardar" />
			</div>
		</div>
	);
};
