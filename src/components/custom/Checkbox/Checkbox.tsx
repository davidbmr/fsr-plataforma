import styles from "./Checkbox.module.css";
import {
	Checkbox as PrimeCheckbox,
	type CheckboxProps as PrimeCheckboxProps,
} from "primereact/checkbox";

interface CheckboxProps extends PrimeCheckboxProps {
	label?: string;
	direction?: "row" | "column";
}

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
	return (
		<div className={styles.checkbox__container}>
			<PrimeCheckbox className={`${styles.checkbox} ${rest.className}`} {...rest} />
			{label && <label>{label}</label>}
		</div>
	);
};
