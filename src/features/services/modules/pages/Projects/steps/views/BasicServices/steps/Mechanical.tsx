import styles from "../BasicServices.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	mechanical: File | null;
	mechanical_memory: File | null;
	mechanical_specs: File | null;
}
export const Mechanical = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			mechanical: null,
			mechanical_memory: null,
			mechanical_specs: null,
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
					label="Plano de Instalación mecánica"
					description="Documento obligatorio emitido por SUNARP"
					name="mechanical"
					onChange={setFieldValue}
					value={values.mechanical}
				/>
				<FileInput
					required
					label="Memoria descriptiva"
					description="Documento obligatorio emitido por SUNARP"
					name="mechanical_memory"
					onChange={setFieldValue}
					value={values.mechanical_memory}
				/>
				<FileInput
					required
					label="Especificaciones técnicas"
					description="Documento obligatorio emitido por SUNARP"
					name="mechanical_specs"
					onChange={setFieldValue}
					value={values.mechanical_specs}
				/>
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
