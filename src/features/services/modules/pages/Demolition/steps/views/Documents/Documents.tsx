import { useRef } from "react";
import styles from "./Documents.module.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { DateField } from "@/components/custom/DateField/DateField";
import { Calendar } from "lucide-react";

export const Documents = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const op = useRef<any>(null);

	return (
		<div className={styles.content}>
			<form noValidate>
				<div className={styles.date__container}>
					<div className={styles.date__title}>
						<h5>Fecha de Creación</h5>
						<p>{new Date().toLocaleDateString()}</p>
					</div>
					<div className={styles.op__container}>
						<Button
							type="button"
							className={styles.op__button}
							onClick={(e) => op?.current?.toggle?.(e)}
							label="Cambiar Fecha"
							icon={<Calendar />}
						/>
						<OverlayPanel showCloseIcon ref={op}>
							<DateField placeholder="dd/mm/yyyy" />
						</OverlayPanel>
					</div>
				</div>

				<Divider />

				<FileInput required label="Memoria descriptiva de arquitectura" />
				<FileInput required label="Memoria descriptiva de seguridad" />
				<FileInput required label="FUE (Formulario Único de Edificación)" />
				<FileInput label="Presupuesto" />
				<FileInput required label="Plano de Seguridad" />
				<FileInput required label="Pago derecho de revisión (CAP) - Factura" />
				<FileInput required label="Pago derecho de revisión (CAP) - Liquidación" />
				<FileInput required label="Plano de Arquitectura" />
				<h2 className={styles.title} style={{ paddingTop: "5px" }}>
					Papel Fotografico
				</h2>
				<Divider />
				<FileInput required label="Fotos" />
				<FileInput required label="Videos" />
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
