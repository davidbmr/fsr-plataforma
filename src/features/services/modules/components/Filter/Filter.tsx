import { useState } from "react";
import styles from "./Filter.module.css";

interface FilterProps {
	options?: { name: string; value: string | number | undefined }[];
	onChange?: (value: string | number | undefined) => void;
	value?: string | number | undefined;
}

export const Filter = ({ options, onChange, value }: FilterProps) => {
	const [filterValue, setValue] = useState<string | number | undefined>(
		(options && options[0].value) || undefined
	);
	return (
		<div className={styles.filter}>
			{options?.map((item, key) => (
				<div
					key={key}
					className={styles.item}
					data-selected={value ? value === item.value : filterValue === item.value}
					onClick={() => (onChange ? onChange(item.value) : setValue(item.value))}
				>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
};
