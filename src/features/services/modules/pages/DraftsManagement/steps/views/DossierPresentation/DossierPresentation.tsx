import styles from "./DossierPresentation.module.css";
import { Button } from "@/components/custom/Button/Button";
import { DateField } from "@/components/custom/DateField/DateField";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Select } from "@/components/custom/Select/Select";

export const DossierPresentation = () => {
	return (
		<div className={styles.content}>
			<div className={styles.inputs}>
				<Select name="" label="Tipo de Licencia de Edificación" />
				<DateField name="" label="Fecha de ingreso" />
			</div>
			<div>
				<FileInput label="Cargar documentación de cargo" required />
			</div>
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</div>
	);
};
