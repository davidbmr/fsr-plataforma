import styles from "../BasicServices.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	solar_file: File | null;
	solar_memory: File | null;
	solar_specs: File | null;
}
export const Solar = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			solar_file: null,
			solar_memory: null,
			solar_specs: null,
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
					label="Planos de instalación de paneles solares"
					description="Documento obligatorio emitido por SUNARP"
					name="solar_file"
					onChange={setFieldValue}
					value={values.solar_file}
				/>
				<FileInput
					required
					label="Memoria descriptiva"
					description="Documento obligatorio emitido por SUNARP"
					name="solar_memory"
					onChange={setFieldValue}
					value={values.solar_memory}
				/>
				<FileInput
					required
					label="Especificaciones técnicas"
					description="Documento obligatorio emitido por SUNARP"
					name="solar_specs"
					onChange={setFieldValue}
					value={values.solar_specs}
				/>
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
