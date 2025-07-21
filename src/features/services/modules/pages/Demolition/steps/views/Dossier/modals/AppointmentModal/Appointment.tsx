import styles from "./Appointment.module.css";
import { Input } from "@/components/custom/Input/Input";
import { DateField } from "@/components/custom/DateField/DateField";
import { Textarea } from "@/components/custom/Textarea/Textarea";
import { Button } from "@/components/custom/Button/Button";

export const Appointment = () => {
	return (
		<div className={styles.content}>
			<div className={styles.inputs}>
				<DateField label="Fecha" />
				<Input label="Enlace de la Reunión" />
			</div>
			<Textarea label="Mótivo" />
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</div>
	);
};
