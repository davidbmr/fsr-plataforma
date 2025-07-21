import styles from "../Records.module.css";
import { FileInput } from "@/components/custom/FileInput/FileInput";

import { useFormik } from "formik";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	income__file: File | null;
}

export const Sanitary = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			income__file: null,
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form noValidate onSubmit={handleSubmit} className={styles.content}>
			<FileInput
				label="Acta de Infraestructura Sanitaria"
				required
				description="PDF, DOC o DOCX (máx. 10MB)"
				name="income__file"
				onChange={setFieldValue}
				value={values.income__file}
			/>

			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</form>
	);
};
