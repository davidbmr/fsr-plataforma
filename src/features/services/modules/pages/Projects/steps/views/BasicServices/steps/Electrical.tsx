import styles from "../BasicServices.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	electrical: File | null;
	electrical_memory: File | null;
	electrical_specs: File | null;
	sedapal: null;
}

export const Electrical = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			electrical: null,
			electrical_memory: null,
			electrical_specs: null,
			sedapal: null,
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
					label="Plano de instalación electrica"
					description="Documento obligatorio emitido por SUNARP"
					name="electrical"
					onChange={setFieldValue}
					value={values.electrical}
				/>
				<FileInput
					required
					label="Memoria descriptiva"
					description="Documento obligatorio emitido por SUNARP"
					name="electrical_memory"
					onChange={setFieldValue}
					value={values.electrical_memory}
				/>
				<FileInput
					required
					label="Especificaciones técnicas"
					description="Documento obligatorio emitido por SUNARP"
					name="electrical_specs"
					onChange={setFieldValue}
					value={values.electrical_specs}
				/>
				<FileInput
					required
					label="Factibilidad de sedapal"
					description="Documento obligatorio emitido por SUNARP"
					name="sedapal"
					onChange={setFieldValue}
					value={values.sedapal}
				/>

				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
