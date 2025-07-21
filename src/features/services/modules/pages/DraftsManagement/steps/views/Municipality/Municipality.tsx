import styles from "./Municipality.module.css";
import { Button } from "@/components/custom/Button/Button";
import { FileInput } from "@/components/custom/FileInput/FileInput";

export const Municipality = () => {
	return (
		<div className={styles.content}>
			<div>
				<FileInput label="Acta de conformidad" required />
				<FileInput label="FUE" required />
				<FileInput label="Planos" required />
			</div>
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</div>
	);
};
