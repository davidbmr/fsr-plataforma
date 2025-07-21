import React from "react";
import styles from "./RadioComponent.module.css";

interface RadioComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const RadioComponent = ({ label, ...rest }: RadioComponentProps) => {
	return (
		<div className={styles.radio__container}>
			<input
				type="radio"
				className={styles.radiobutton + (rest.className ? ` ${rest.className}` : "")}
				{...rest}
			/>
			{label && <label htmlFor={rest.id || rest.name}>{label}</label>}
		</div>
	);
};
