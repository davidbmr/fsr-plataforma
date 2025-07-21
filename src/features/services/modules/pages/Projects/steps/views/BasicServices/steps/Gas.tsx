import styles from "../BasicServices.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	gas: File | null;
	gas_memory: File | null;
	gas_specs: File | null;
}

export const Gas = () => {
	const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			gas: null,
			gas_memory: null,
			gas_specs: null,
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
					label="Plano de Instalación de Gas"
					description="Documento obligatorio emitido por SUNARP"
					name="gas"
					onChange={setFieldValue}
					value={values.gas}
				/>
				<FileInput
					required
					label="Memoria descriptiva"
					description="Documento obligatorio emitido por SUNARP"
					name="gas_memory"
					onChange={setFieldValue}
					value={values.gas_memory}
				/>
				<FileInput
					required
					label="Especificaciones técnicas"
					description="Documento obligatorio emitido por SUNARP"
					name="gas_specs"
					onChange={setFieldValue}
					value={values.gas_specs}
				/>

				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
