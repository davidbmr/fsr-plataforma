import styles from "./Button.module.css";
import { Button as CustomButton, type ButtonProps } from "primereact/button";

export const Button = ({ ...rest }: ButtonProps) => {
	return <CustomButton className={`${styles.button} ${rest.className}`} {...rest} />;
};
