import {
	useState,
	type Dispatch,
	type ForwardRefExoticComponent,
	type RefAttributes,
	type SetStateAction,
} from "react";
import styles from "./Stepper.module.css";
import type { LucideProps } from "lucide-react";

export interface StepperOptionsProps {
	name: string;
	icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
	value: string | number | undefined;
	disabled?: boolean;
}

interface StepperProps {
	options?: StepperOptionsProps[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: Dispatch<SetStateAction<any>>;
	value?: string | number | undefined;
	disabled?: boolean;
}

export const Stepper = ({ options, onChange, value, disabled = false }: StepperProps) => {
	const [stepperValue, setValue] = useState<string | number | undefined>(
		(options && options[0].value) || undefined
	);

	return (
		<div className={styles.stepper}>
			{options?.map((item, key) => (
				<div
					key={key}
					className={styles.item}
					data-disabled={item.disabled}
					data-selected={value ? value === item.value : stepperValue === item.value}
					onClick={
						disabled
							? undefined
							: !item.disabled
							? () => (onChange ? onChange(item.value) : setValue(item.value))
							: undefined
					}
				>
					{item.icon && (
						<item.icon
							className={styles.icon}
							data-selected={value ? value === item.value : stepperValue === item.value}
						/>
					)}
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
};
