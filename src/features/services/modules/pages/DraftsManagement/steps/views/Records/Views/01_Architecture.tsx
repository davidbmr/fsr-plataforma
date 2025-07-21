import styles from "../Records.module.css";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { DateField } from "@/components/custom/DateField/DateField";
import { Select } from "@/components/custom/Select/Select";
import { useFormik } from "formik";
import { Button } from "@/components/custom/Button/Button";

interface FormValues {
	income__file: File | null;
	upload_date: Date | null;
	reception_date: Date | null;
	emission_date: Date | null;
	expiration_date: Date | null;
	result: string | null;
	observation__file: File | null;
}

export const Architecture = () => {
	const { values, setFieldValue, handleChange, handleSubmit } = useFormik<FormValues>({
		initialValues: {
			income__file: null,
			upload_date: null,
			reception_date: null,
			emission_date: null,
			expiration_date: null,
			result: null,
			observation__file: null,
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form noValidate onSubmit={handleSubmit} className={styles.content}>
			<FileInput
				label="Cargo de ingreso"
				required
				description="PDF, DOC o DOCX (máx. 10MB)"
				name="income__file"
				onChange={setFieldValue}
				value={values.income__file}
			/>
			<div className={styles.date__inputs}>
				<DateField
					label="Fecha de subida"
					name="upload_date"
					value={values.upload_date}
					onChange={handleChange}
				/>
				<DateField
					label="Fecha de recepción"
					name="reception_date"
					value={values.reception_date}
					onChange={handleChange}
				/>
				<DateField
					label="Fecha de emisión"
					name="emission_date"
					value={values.emission_date}
					onChange={handleChange}
				/>
				<DateField
					label="Fecha de vencimiento del plazo"
					name="expiration_date"
					value={values.expiration_date}
					onChange={handleChange}
				/>
			</div>

			<Select
				label="Resultado"
				options={options}
				name="result"
				value={values.result}
				onChange={handleChange}
			/>
			{values.result === "2" && (
				<FileInput
					label="Subir levantamiento de observaciones"
					required
					description="PDF, DOC o DOCX (máx. 10MB)"
					name="observation__file"
					onChange={setFieldValue}
					value={values.observation__file}
				/>
			)}
			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</form>
	);
};
const options = [
	{ name: "Conforme", value: "1" },
	{ name: "Conforme con observaciones", value: "2" },
];
