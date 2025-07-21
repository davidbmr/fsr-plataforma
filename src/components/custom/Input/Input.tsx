import styles from "./Input.module.css";
import { InputText, type InputTextProps } from "primereact/inputtext";

interface InputProps extends InputTextProps {
	label?: string;
	direction?: "row" | "column";
	success?: boolean;
	error?: boolean;
}

export const Input = ({
	label,
	direction = "column",
	success = false,
	error = false,
	className,
	...rest
}: InputProps) => {
	const inputClassName = `${styles.inputtext} ${success ? styles.success : ""} ${
		error ? styles.error : ""
	} ${className || ""}`;

	return (
		<div className={styles.input__container} data-direction={direction}>
			{label && <label>{label}</label>}
			<InputText className={inputClassName} {...rest} />
		</div>
	);
};
