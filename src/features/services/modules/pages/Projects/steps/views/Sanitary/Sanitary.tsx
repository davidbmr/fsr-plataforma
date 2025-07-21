import styles from "./Sanitary.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	sanitary: File | null;
	memory: File | null;
	specs: File | null;
	sedapal: File | null;
}

export const Sanitary = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			sanitary: null,
			memory: null,
			specs: null,
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
					label="Planos de instalaciones sanitarias"
					description="Documento obligatorio emitido por SUNARP"
					name="sanitary"
					onChange={setFieldValue}
					value={values.sanitary}
				/>
				<FileInput
					required
					label="Memoria descriptiva"
					description="Documento obligatorio emitido por SUNARP"
					name="memory"
					onChange={setFieldValue}
					value={values.memory}
				/>
				<FileInput
					required
					label="Especificaciones técnicas"
					description="Documento obligatorio emitido por SUNARP"
					name="specs"
					onChange={setFieldValue}
					value={values.specs}
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
