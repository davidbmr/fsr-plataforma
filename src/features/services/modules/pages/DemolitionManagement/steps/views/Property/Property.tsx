import styles from "./Property.module.css";
import { useFormik } from "formik";
import { Input } from "@/components/custom/Input/Input";
import { Select } from "@/components/custom/Select/Select";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { Textarea } from "@/components/custom/Textarea/Textarea";

interface PropertyProps {
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
	area: string;
	front_measures: string;
	right_measures: string;
	left_measures: string;
	bottom_measures: string;

	type: string;
	n_floors: string;
	description: string;
}
export const Property = () => {
	const { values, handleSubmit, handleChange } = useFormik<PropertyProps>({
		initialValues: {
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
			area: "",
			front_measures: "",
			right_measures: "",
			left_measures: "",
			bottom_measures: "",
			type: "",
			n_floors: "",
			description: "",
		},
		onSubmit: () => {},
	});
	return (
		<form noValidate onSubmit={handleSubmit} className={styles.content}>
			<div className={styles.ground}>
				<h3 className={styles.title}>Datos del Terreno</h3>
				<div className={styles.address}>
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
							<div className={styles.inputs__grounded}>
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
			</div>

			<Divider />
			<div className={styles.messures}>
				<h3 className={styles.title}>Área y Medidas Perimétricas</h3>
				<div className={styles.inputs}>
					<Input
						keyfilter={"int"}
						value={values.area}
						onChange={handleChange}
						name="area"
						label="Área Total (m²)"
						placeholder="Ingrese área local"
					/>
					<Input
						keyfilter={"int"}
						value={values.front_measures}
						name="front_measures"
						onChange={handleChange}
						label="Por el frente (m)"
						placeholder="Ingrese área local"
					/>
					<Input
						keyfilter={"int"}
						value={values.right_measures}
						name="right_measures"
						onChange={handleChange}
						label="Por la derecha (m)"
						placeholder="Ingrese área local"
					/>
					<Input
						keyfilter={"int"}
						value={values.left_measures}
						name="left_measures"
						onChange={handleChange}
						label="Por la izquierda (m)"
						placeholder="Ingrese área local"
					/>
					<Input
						keyfilter={"int"}
						value={values.bottom_measures}
						name="bottom_measures"
						onChange={handleChange}
						label="Por el fondo (m)"
						placeholder="Ingrese área local"
					/>
				</div>
			</div>
			<Divider />
			<div className={styles.building__section}>
				<h4>Edificación</h4>
				<div>
					<div className={styles.inputs}>
						<Select
							label="Tipo de Edificación"
							name="type"
							onChange={handleChange}
							placeholder="Seleccione el tipo de edificación"
							value={values.type}
						/>
						<Input
							keyfilter={"int"}
							name="n_floors"
							value={values.n_floors}
							onChange={handleChange}
							label="Número de Pisos"
							placeholder="Ingrese cantidad de pisos"
						/>
					</div>
					<div className={styles.textarea}>
						<Textarea
							label="Descripción"
							name="description"
							value={values.description}
							onChange={handleChange}
							placeholder="..."
						/>
					</div>
				</div>
			</div>

			<div className={styles.footer__button}>
				<Button label="Guardar" />
			</div>
		</form>
	);
};
