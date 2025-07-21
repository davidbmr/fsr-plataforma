import styles from "./Property.module.css";
import { useFormik } from "formik";
import { Input } from "@/components/custom/Input/Input";
import { Select } from "@/components/custom/Select/Select";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { Textarea } from "@/components/custom/Textarea/Textarea";

interface PropertyProps {
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
			<div className={styles.messures}>
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
