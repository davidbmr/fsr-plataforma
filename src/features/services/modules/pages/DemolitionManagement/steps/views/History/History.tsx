import styles from "./History.module.css";
import { Button } from "@/components/custom/Button/Button";
import { RadioComponent as Radio } from "@/components/custom/RadioComponent/RadioComponent";
import { Divider } from "@/components/custom/Divider/Divider";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Textarea } from "@/components/custom/Textarea/Textarea";
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
			<Divider />
			<div className={styles.ubication__form}>
				<h2 className={styles.subtitle}>Ubicación Predio</h2>
				<div className={styles.radio__container}>
					<p>¿Predio se encuentra en zona de espacio Monumental?</p>
					<div className={styles.radio__button}>
						<Radio label="Si" />
						<Radio label="No" />
					</div>
				</div>
				<div className={styles.files}>
					<FileInput label="Planos de Ubicación" required />
					<FileInput label="Planos de Arquitectura" required />
					<Textarea label="Comentario" placeholder="Escribe un comentario breve..." />
				</div>
			</div>
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</div>
	);
};
