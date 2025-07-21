import styles from "./Structures.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	sunarp: File | null;
	municipalidad: File | null;
	ubicacion: File | null;
	arquitectura: File | null;
	seguridad: File | null;
}

export const Structures = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			sunarp: null,
			municipalidad: null,
			ubicacion: null,
			arquitectura: null,
			seguridad: null,
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className={styles.content}>
			<form noValidate onSubmit={handleSubmit}>
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
				<h4 className={styles.subtitle}>Especificaciónes técnicas:</h4>
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

				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
