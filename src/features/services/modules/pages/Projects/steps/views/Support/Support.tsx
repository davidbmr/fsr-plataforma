import styles from "./Support.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { RadioComponent as Radio } from "@/components/custom/RadioComponent/RadioComponent";

interface FormValues {
	support_required: string | null;
	report_required: string | null;
	support: File | null;
	memory: File | null;
	specs: File | null;
}

export const Support = () => {
	const { values, setFieldValue, handleSubmit, handleChange } = useFormik<FormValues>({
		initialValues: {
			support_required: null,
			report_required: null,
			support: null,
			memory: null,
			specs: null,
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className={styles.content}>
			<form noValidate onSubmit={handleSubmit}>
				<div className={styles.container}>
					<div className={styles.subtitle}>
						<h3>Sustento Técnico Legal</h3>
						<p>Indique si el proyecto requiere sustento técnico legal</p>
					</div>
					<div className={styles.radio__container}>
						<Radio
							label="Sí"
							name="support_required"
							value={"si"}
							checked={values.support_required === "si" ? true : false}
							onChange={handleChange}
						/>
						<Radio
							label="No"
							name="support_required"
							value="no"
							checked={values.support_required === "no" ? true : false}
							onChange={handleChange}
						/>
					</div>
				</div>
				{values.support_required === "si" && (
					<FileInput
						required
						label="Subir documento de sustento técnico legal"
						description="Documento obligatorio emitido por SUNARP"
						name="support"
						onChange={setFieldValue}
						value={values.support}
					/>
				)}
				<Divider />
				<div>
					<div className={styles.container}>
						<div className={styles.subtitle}>
							<p>Indique si el proyecto requiere informe vinculante</p>
						</div>
						<div className={styles.radio__container}>
							<Radio
								label="Sí"
								name="report_required"
								value={"si"}
								checked={values.report_required === "si" ? true : false}
								onChange={handleChange}
							/>
							<Radio
								label="No"
								name="report_required"
								value="no"
								checked={values.report_required === "no" ? true : false}
								onChange={handleChange}
							/>
						</div>
					</div>
					{values.report_required === "si" && (
						<>
							<FileInput
								required
								label="Consulta al ministerio"
								description="Documento obligatorio emitido por SUNARP"
								name="memory"
								onChange={setFieldValue}
								value={values.memory}
							/>
							<FileInput
								required
								label="Cargo de presentación de consulta"
								description="Documento obligatorio emitido por SUNARP"
								name="specs"
								onChange={setFieldValue}
								value={values.specs}
							/>
						</>
					)}
				</div>

				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
