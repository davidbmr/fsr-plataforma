import styles from "./Records.module.css";
import { File } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Stepper, type StepperOptionsProps } from "@/components/custom/Stepper/Stepper";
import { Architecture } from "./Views/01_Architecture";
import { Structure } from "./Views/02_Structure";
import { Electrical } from "./Views/03_Electrical";
import { Sanitary } from "./Views/04_Sanitary";

interface RenderDocumentProps extends StepperOptionsProps {
	title: string;
	children: ReactNode;
}

export const Records = () => {
	const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
	const mappedOptions = options.map((item) => {
		return {
			...item,
			disabled: location.pathname.endsWith("/create") && item.value !== 1,
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
		name: "Arquitectura",
		title: "Acta de Arquitectura",
		children: <Architecture />,
		icon: File,
		value: 1,
	},
	{
		name: "Estructura",
		title: "Acta de Estructura",
		children: <Structure />,
		icon: File,
		value: 2,
	},
	{
		name: "Eléctrica",
		title: "Acta de infraestructura Eléctrica",
		children: <Electrical />,
		icon: File,
		value: 3,
	},
	{
		name: "Sanitaria",
		title: "Acta de infraestructura Sanitaria",
		children: <Sanitary />,
		icon: File,
		value: 4,
	},
];
