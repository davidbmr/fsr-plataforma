import { useRef } from "react";
import styles from "./DocumentsStep.module.css";
import { useFormik } from "formik";
import { OverlayPanel } from "primereact/overlaypanel";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { DateField } from "@/components/custom/DateField/DateField";
import { Calendar } from "lucide-react";
interface FormValues {
	sunarp: File | null;
	municipalidad: File | null;
	ubicacion: File | null;
	arquitectura: File | null;
	seguridad: File | null;
	arquitectura_descriptiva: File | null;
	seguridad_descriptiva: File | null;
	FUE: File | null;
	presupuesto: File | null;
	factura: File | null;
	liquidacion: File | null;
}

export const DocumentsStep = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const op = useRef<any>(null);
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			sunarp: null,
			municipalidad: null,
			ubicacion: null,
			arquitectura: null,
			seguridad: null,
			arquitectura_descriptiva: null,
			seguridad_descriptiva: null,
			FUE: null,
			presupuesto: null,
			factura: null,
			liquidacion: null,
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	console.log(new Date().toLocaleDateString());
	return (
		<div className={styles.content}>
			<form noValidate onSubmit={handleSubmit}>
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
				<FileInput
					required
					label="Partida Registral (SUNARP)"
					description="Documento obligatorio emitido por SUNARP"
					name="sunarp"
					onChange={setFieldValue}
					value={values.sunarp}
				/>
				<FileInput
					required
					label="Certificado de parámetros (MUNICIPALIDAD)"
					description="Documento obligatorio emitido por SUNARP"
					name="municipalidad"
					onChange={setFieldValue}
					value={values.municipalidad}
				/>
				<FileInput
					required
					label="Plano de Ubicación"
					description="Documento obligatorio emitido por SUNARP"
					name="ubicacion"
					onChange={setFieldValue}
					value={values.ubicacion}
				/>
				<FileInput
					required
					label="Plano de Arquitectura"
					description="Documento obligatorio emitido por SUNARP"
					name="arquitectura"
					onChange={setFieldValue}
					value={values.arquitectura}
				/>
				<FileInput
					required
					label="Plano de Seguridad"
					description="Documento obligatorio emitido por SUNARP"
					name="seguridad"
					onChange={setFieldValue}
					value={values.seguridad}
				/>
				<h2 className={styles.title} style={{ paddingTop: "5px" }}>
					Documentos FSR
				</h2>
				<Divider />
				<FileInput
					required
					label="Memoria descriptiva de arquitectura"
					description="Documento obligatorio emitido por SUNARP"
					name="arquitectura_descriptiva"
					onChange={setFieldValue}
					value={values.arquitectura_descriptiva}
				/>
				<FileInput
					required
					label="Memoria descriptiva de seguridad"
					description="Documento obligatorio emitido por SUNARP"
					name="seguridad_descriptiva"
					onChange={setFieldValue}
					value={values.seguridad_descriptiva}
				/>
				<FileInput
					required
					label="FUE (Formulario Único de Edificación)"
					description="Documento obligatorio emitido por SUNARP"
					name="FUE"
					onChange={setFieldValue}
					value={values.FUE}
				/>
				<FileInput
					label="Presupuesto"
					description="Documento obligatorio emitido por SUNARP"
					name="presupuesto"
					onChange={setFieldValue}
					value={values.presupuesto}
				/>
				<FileInput
					required
					label="Pago derecho de revisión (CAP) - Factura"
					description="Documento obligatorio emitido por SUNARP"
					name="factura"
					onChange={setFieldValue}
					value={values.factura}
				/>
				<FileInput
					required
					label="Pago derecho de revisión (CAP) - Liquidación"
					description="Documento obligatorio emitido por SUNARP"
					name="liquidacion"
					onChange={setFieldValue}
					value={values.liquidacion}
				/>
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
