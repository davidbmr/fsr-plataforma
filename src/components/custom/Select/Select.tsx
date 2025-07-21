import styles from "./Select.module.css";
import { Dropdown, type DropdownProps } from "primereact/dropdown";

interface SelectProps extends DropdownProps {
	label?: string;
	direction?: "row" | "column";
	success?: boolean;
	error?: boolean;
}

export const Select = ({
	label,
	direction = "column",
	success = false,
	error = false,
	className,
	...rest
}: SelectProps) => {
	const selectClassName = `${styles.selectfield} ${success ? styles.success : ""} ${
		error ? styles.error : ""
	} ${className || ""}`;
	return (
		<div className={styles.select__container} data-direction={direction}>
			{label && <label>{label}</label>}
			<Dropdown
				className={selectClassName}
				optionLabel={rest.optionLabel || "name"}
				optionValue={rest.optionValue || "value"}
				{...rest}
			/>
		</div>
	);
};
