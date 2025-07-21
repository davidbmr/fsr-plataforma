import { useState, type ReactNode } from "react";
import styles from "./BasicServices.module.css";
import { Stepper, type StepperOptionsProps } from "@/components/custom/Stepper/Stepper";
import { Electrical } from "./steps/Electrical";
import { Mechanical } from "./steps/Mechanical";
import { Gas } from "./steps/Gas";
import { Solar } from "./steps/Solar";
import { File } from "lucide-react";

interface RenderDocumentProps extends StepperOptionsProps {
	title: string;
	children: ReactNode;
}
export const BasicServices = () => {
	const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
	const mappedOptions = options.map((item) => {
		return {
			...item,
		};
	});
	const actual__step = options.filter((item) => item.value === step);
	return (
		<div className={styles.main__content}>
			<div className={styles.stepper}>
				<Stepper options={mappedOptions} value={step} onChange={setStep} />
			</div>
			<div className={styles.render__content}>
				<h1>{actual__step[0].title}</h1>
				<div>{actual__step[0].children}</div>
			</div>
		</div>
	);
};
const options: RenderDocumentProps[] = [
	{
		name: "Eléctrica",
		title: "Documentación de Servicio Eléctrico",
		children: <Electrical />,
		icon: File,
		value: 1,
	},
	{
		name: "Mecánica",
		title: "Documentación de Servicio Mecánico",
		children: <Mechanical />,
		icon: File,
		value: 2,
	},
	{
		name: "Gas",
		title: "Documentación de Servicio de Gas",
		children: <Gas />,
		icon: File,
		value: 3,
	},
	{
		name: "Solar",
		title: "Documentación de Servicio Eléctrico vía Sistema Solar",
		children: <Solar />,
		icon: File,
		value: 4,
	},
];
