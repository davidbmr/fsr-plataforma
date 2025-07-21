import styles from "./LoadDocuments.module.css";
import { useFormik } from "formik";
import { RadioComponent as Radio } from "@/components/custom/RadioComponent/RadioComponent";
import { Input } from "@/components/custom/Input/Input";
import { Select } from "@/components/custom/Select/Select";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { FileInput } from "@/components/custom/FileInput/FileInput";

interface DocumentsDataProps {
	// Common
	person_type: "pj" | "pn" | undefined;
	doc_type: "ruc" | "dni" | "cext" | undefined;
	doc_number: string | undefined;

	// PJ
	company_name?: string | undefined;

	// PN
	names?: string | undefined;
	first_lastname?: string | undefined;
	second_lastname?: string | undefined;
	phone?: string | undefined;
	email?: string | undefined;
	civil_status?: undefined;
	property_title?: File | undefined;
	registration_post?: File | undefined;
}
export const LoadDocuments = () => {
	const { values, handleChange, handleSubmit, setFieldValue } = useFormik<DocumentsDataProps>({
		initialValues: {
			// Common
			person_type: "pn",
			doc_type: undefined,
			doc_number: undefined,

			// PJ
			company_name: undefined,

			// PN
			names: undefined,
			first_lastname: undefined,
			second_lastname: undefined,
			civil_status: undefined,
			email: undefined,
			phone: undefined,

			property_title: undefined,
			registration_post: undefined,
		},
		onSubmit: () => {},
	});

	return (
		<div className={styles.content}>
			<form noValidate onSubmit={handleSubmit}>
				<div className={styles.pt__container}>
					<Radio
						label="Persona Natural"
						name="person_type"
						value="pn"
						checked={values.person_type === "pn"}
						onChange={handleChange}
					/>
					<Radio
						label="Persona Jurídica"
						name="person_type"
						value="pj"
						checked={values.person_type === "pj"}
						onChange={handleChange}
					/>
				</div>
				{values.person_type === "pj" && (
					<div className={styles.pj__form}>
						<Input
							label="Razón Social o Denominación"
							name="company_name"
							value={values.company_name}
							onChange={handleChange}
							placeholder="Ingrese la razón social o denominación"
						/>
						<Input
							label="Número de RUC"
							name="doc_number"
							value={values.doc_number}
							placeholder="Ingrese su número de ruc"
							onChange={handleChange}
						/>
					</div>
				)}
				{values.person_type === "pn" && (
					<>
						<div className={styles.pn__form}>
							<Select
								label="Tipo de Documento"
								name="doc_type"
								value={values.doc_type}
								onChange={handleChange}
								placeholder="Seleccione tipo de documento"
							/>
							<Input
								label="Número de Documento"
								name="doc_number"
								value={values.doc_number}
								placeholder="Ingrese número de documento"
								onChange={handleChange}
							/>
							<Select
								label="Estado Civil"
								name="civil_status"
								value={values.civil_status}
								onChange={handleChange}
								options={[
									{ name: "Soltero/a", value: "soltero" },
									{ name: "Casado/a", value: "casado" },
								]}
								placeholder="Seleccione su estado civíl"
							/>
							<Input
								label="Apellido Paterno"
								name="first_lastname"
								value={values.first_lastname}
								onChange={handleChange}
								placeholder="Ingrese apellido paterno "
							/>
							<Input
								label="Apellido Materno"
								name="second_lastname"
								value={values.second_lastname}
								onChange={handleChange}
								placeholder="Ingrese apellido materno"
							/>
							<Input
								label="Nombres"
								name="names"
								placeholder="Ingrese nombres"
								value={values.names}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.contact__inputs}>
							<Input
								label="Teléfono"
								placeholder="Ingrese teléfono"
								name="phone"
								value={values.phone}
								onChange={handleChange}
							/>
							<Input
								label="Correo Electrónico"
								placeholder="Ingrese correo electrónico"
								name="email"
								value={values.doc_type}
								onChange={handleChange}
							/>
						</div>
					</>
				)}
				<Divider />
				<div className={styles.documents}>
					<FileInput
						required
						label="Titulo de Propiedad"
						name="property_title"
						onChange={setFieldValue}
						value={values.property_title}
					/>
					<FileInput
						required
						label="Partida Registral"
						name="registration_post"
						onChange={setFieldValue}
						value={values.registration_post}
					/>
				</div>
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
