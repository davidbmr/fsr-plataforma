import styles from "./Architecture.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	ubication: File | null;
	architecture: File | null;
	security: File | null;
	security_memory: File | null;
	architecture_memory: File | null;
	structure_memory: File | null;
}

export const Architecture = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			ubication: null,
			architecture: null,
			security: null,
			security_memory: null,
			architecture_memory: null,
			structure_memory: null,
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
					label="Plano de Ubicación"
					name="ubication"
					onChange={setFieldValue}
					value={values.ubication}
				/>
				<FileInput
					required
					label="Plano de Arquitectura"
					name="architecture"
					onChange={setFieldValue}
					value={values.architecture}
				/>
				<FileInput
					required
					label="Plano de Seguridad"
					name="security"
					onChange={setFieldValue}
					value={values.security}
				/>
				<FileInput
					required
					label="Memoria descriptiva de seguridad"
					name="security_memory"
					onChange={setFieldValue}
					value={values.security_memory}
				/>
				<FileInput
					required
					label="Memoria descriptiva de arquitectura"
					name="architecture_memory"
					onChange={setFieldValue}
					value={values.architecture_memory}
				/>
				<FileInput
					required
					label="Memoria descriptiva de estructura"
					name="structure_memory"
					onChange={setFieldValue}
					value={values.structure_memory}
				/>

				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
