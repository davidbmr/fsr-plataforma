import styles from "./CustomerManagement.module.css";
import { useFormik } from "formik";
import { RadioComponent as Radio } from "@/components/custom/RadioComponent/RadioComponent";
import { Input } from "@/components/custom/Input/Input";
import { Select } from "@/components/custom/Select/Select";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";

interface ManagedProps {
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

	// Ubigeo
	department: string | undefined;
	province: string | undefined;
	district: string | undefined;
	living_place: string | undefined;
	mz: string | undefined;
	lot: string | undefined;
	sublot: string | undefined;
	street: string | undefined;
	street_number: string | undefined;
	inside: string | undefined;
}

export const CustomerManagement = () => {
	const { values, handleChange, handleSubmit } = useFormik<ManagedProps>({
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

			// Ubigeo
			department: undefined,
			province: undefined,
			district: undefined,
			living_place: undefined,
			mz: undefined,
			lot: undefined,
			sublot: undefined,
			street: undefined,
			street_number: undefined,
			inside: undefined,
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
				<div className={styles.address}>
					<h4>Domicilio</h4>
					<div>
						<div className={styles.ubigeo}>
							<Select
								label="Departamento"
								name="department"
								value={values.department}
								onChange={handleChange}
								placeholder="Seleccione un departamento"
							/>
							<Select
								label="Provincia"
								name="province"
								value={values.province}
								onChange={handleChange}
								placeholder="Seleccione una provincia"
							/>
							<Select
								label="Distrito"
								name="district"
								value={values.district}
								onChange={handleChange}
								placeholder="Seleccione un distrito"
							/>
						</div>
						<div className={styles.location}>
							<Input
								label="Urbanización / A.H. / Otro"
								name="living_place"
								value={values.living_place}
								onChange={handleChange}
								placeholder="Ingrese su lugar de residencia"
							/>
							<div className={styles.inputs}>
								<Input
									label="Mz"
									name="mz"
									placeholder="Mz"
									value={values.mz}
									onChange={handleChange}
								/>
								<Input
									label="Lote"
									name="lot"
									placeholder="Lote"
									value={values.lot}
									onChange={handleChange}
								/>
								<Input
									label="Sub Lote"
									name="sublot"
									value={values.sublot}
									placeholder="Sublote"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className={styles.location}>
							<Input
								label="Av. / Jr. / Calle / Pasaje"
								name="street"
								value={values.street}
								onChange={handleChange}
								placeholder="Ingrese vía"
							/>
							<div className={styles.street}>
								<Input
									label="Número"
									name="street_number"
									value={values.street_number}
									onChange={handleChange}
									placeholder="Número de vía"
								/>
								<Input
									label="Interior"
									name="inside"
									value={values.inside}
									onChange={handleChange}
									placeholder="Interior"
								/>
							</div>
						</div>
					</div>
				</div>
				{values.civil_status === "casado" && (
					<>
						<Divider />
						<div className={styles.spouse__form}>
							<h4>Datos del Cónyuge</h4>
							<div className={styles.pn__form}>
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
						</div>
					</>
				)}
				<div className={styles.footer__button}>
					<Button label="Guardar" />
				</div>
			</form>
		</div>
	);
};
