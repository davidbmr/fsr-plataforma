import styles from "./LicenceStep.module.css";
import { Button } from "@/components/custom/Button/Button";
import { Select } from "@/components/custom/Select/Select";

export const LicenceStep = () => {
	return (
		<div className={styles.content}>
			<div className={styles.inputs}>
				<Select name="" label="Tipo de Licencia de Edificación" />
				<Select name="" label="Tipo de Modalidad" />
			</div>
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</div>
	);
};
