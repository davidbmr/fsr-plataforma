import { useRef } from "react";
import styles from "./Documents.module.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { DateField } from "@/components/custom/DateField/DateField";
import { Calendar } from "lucide-react";

export const Documents = () => {
	const op = useRef<OverlayPanel>(null);
	return (
		<div className={styles.content}>
			<form noValidate>
				<h2 className={styles.title}>Documentos FSR</h2>

				<div className={styles.date__container}>
					<div className={styles.date__title}>
						<h5>Fecha de Creación</h5>
						<p>{new Date().toLocaleDateString()}</p>
					</div>
					<div className={styles.op__container}>
						<Button
							type="button"
							className={styles.op__button}
							onClick={(e) => op.current?.toggle?.(e)}
							label="Cambiar Fecha"
							icon={<Calendar />}
						/>
						<OverlayPanel showCloseIcon ref={op}>
							<DateField placeholder="dd/mm/yyyy" />
						</OverlayPanel>
					</div>
				</div>
				<Divider />
				<FileInput required label="Partida Registral (SUNARP)" name="sunarp" />
				<FileInput
					required
					label="Certificado de parámetros (MUNICIPALIDAD)"
					name="municipalidad"
				/>
				<FileInput required label="Plano de Ubicación" name="ubicacion" />
				<FileInput required label="Plano de Arquitectura" name="arquitectura" />
				<FileInput required label="Plano de Seguridad" name="seguridad" />
				<h2 className={styles.title} style={{ paddingTop: "5px" }}>
					Documentos FSR
				</h2>
				<Divider />
				<FileInput
					required
					label="Memoria descriptiva de arquitectura"
					name="arquitectura_descriptiva"
				/>
				<FileInput required label="Memoria descriptiva de seguridad" name="seguridad_descriptiva" />
				<FileInput required label="FUE (Formulario Único de Edificación)" name="FUE" />
				<FileInput label="Presupuesto" name="presupuesto" />
				<FileInput required label="Pago derecho de revisión (CAP) - Factura" name="factura" />
				<FileInput
					required
					label="Pago derecho de revisión (CAP) - Liquidación"
					name="liquidacion"
				/>
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
