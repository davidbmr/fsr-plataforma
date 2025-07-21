import styles from "./DateField.module.css";
import { Calendar, type CalendarProps, type CalendarSelectionMode } from "primereact/calendar";

interface InputProps<TMode extends CalendarSelectionMode = "single"> extends CalendarProps<TMode> {
	label?: string;
	direction?: "row" | "column";
	success?: boolean;
	error?: boolean;
}

export const DateField = <TMode extends CalendarSelectionMode>({
	label = "",
	direction = "column",
	success = false,
	error = false,
	className,
	selectionMode,
	...rest
}: InputProps<TMode>) => {
	const inputClassName = `${styles.datefield} ${success ? styles.success : ""} ${
		error ? styles.error : ""
	} ${className || ""}`;

	// Determinar el placeholder apropiado según el modo de selección
	const getPlaceholder = () => {
		if (rest.placeholder) return rest.placeholder;

		switch (selectionMode) {
			case "multiple":
				return "Seleccionar fechas";
			case "range":
				return "Seleccionar rango";
			default:
				return "dd/mm/aaaa";
		}
	};

	// Configuración específica para selección múltiple
	const getMultipleConfig = () => {
		if (selectionMode === "multiple") {
			return {
				showButtonBar: true,
				showClear: true,
				showToday: true,
			};
		}
		return {};
	};

	return (
		<div className={styles.input__container} data-direction={direction}>
			{label && <label>{label}</label>}
			<Calendar
				placeholder={getPlaceholder()}
				className={inputClassName}
				selectionMode={selectionMode}
				{...getMultipleConfig()}
				{...rest}
			/>
		</div>
	);
};
