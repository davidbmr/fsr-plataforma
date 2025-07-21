import { useState } from "react";
import styles from "./Content.module.css";
import { useLocation } from "react-router";

// Icons
import { File, Files, Save } from "lucide-react";

// Types
import type { Range, RenderDocumentProps } from "@/vite-env";

// Components
import { ProgressBar } from "@/components/custom/ProgressBar/ProgressBar";
import { Divider } from "@/components/custom/Divider/Divider";
import { ContentBox } from "@/components/layout/ContentBox/ContentBox";
import { Button } from "@/components/custom/Button/Button";
import { Stepper } from "@/components/custom/Stepper/Stepper";

// Steps
import { SelectDraft } from "./views/SelectDraft/SelectDraft";
import { Structures } from "./views/Structures/Structures";
import { Sanitary } from "./views/Sanitary/Sanitary";
import { BasicServices } from "./views/BasicServices/BasicServices";
import { Support } from "./views/Support/Support";
import { Architecture } from "./views/Architecture/Architecture";
import { LicenceStep } from "./views/Licence/Licence";

export const Content = () => {
	const location = useLocation();
	const [step, setStep] = useState<Range<7>>(1);
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
			<div className={styles.content}>
				<ContentBox
					title={actual__step[0].title}
					Icon={actual__step[0]?.icon}
					description={actual__step[0]?.description}
				>
					{actual__step[0]?.children}
				</ContentBox>
			</div>
			<div className={styles.aside}>
				<ContentBox
					title="Resumen del Expediente"
					Icon={Files}
					description="Información del anteproyecto"
				>
					<div>
						<ProgressBar value={0} label="Completado:" />
					</div>
					<Divider />
					<div className={styles.section}>
						<h5>Seciones</h5>
						<div className={styles.items}>
							{options.map((item, key) => (
								<div key={key} className={styles.section__item}>
									<div>
										{item.icon && <item.icon color="#007C88" width={15} height={15} />}
										<h6>{item.title}</h6>
									</div>
									<div className={styles.item__state} data-state={item.state === "Pendiente"}>
										{item.state}
									</div>
								</div>
							))}
						</div>
					</div>

					<Divider />
					<div>
						<Button
							children={
								<label className={styles.button}>
									<Save height={20} width={20} /> Guardar Expediente
								</label>
							}
						/>
					</div>
				</ContentBox>
			</div>
		</div>
	);
};

const options: RenderDocumentProps[] = [
	{
		name: "Licencia",
		title: "Tipo de Licencia",
		description: "Seleccione el tipo de licencia del proyecto.",
		children: <LicenceStep />,
		icon: File,
		state: "Completado",
		value: 1,
	},
	{
		name: "Anteproyecto",
		title: "Datos del Anteproyecto",
		description:
			"Seleccione un anteproyecto aprobado para importar sus datos o ingrese la información manualmente.",
		children: <SelectDraft />,
		icon: File,
		state: "Completado",
		value: 2,
	},
	{
		name: "Arquitectura",
		title: "Arquitectura",
		description: "Sube los documentos relacionados con la arquitectura.",
		children: <Architecture />,
		icon: File,
		state: "Pendiente",
		value: 3,
	},
	{
		name: "Estructura",
		title: "Especialidad de Estructuras",
		description: "Sube los documentos relacionados con la especialidad de estructuras.",
		children: <Structures />,
		icon: File,
		state: "Pendiente",
		value: 4,
	},
	{
		name: "Sanitarias",
		title: "Instalaciones Sanitarias",
		description: "Sube los documentos relacionados con las instalaciones sanitarias.",
		children: <Sanitary />,
		icon: File,
		state: "Pendiente",
		value: 5,
	},
	{
		name: "Eléctricas",
		title: "Instalaciones Eléctricas",
		description: "Sube los documentos relacionados con instalaciones eléctricas.",
		children: <BasicServices />,
		icon: File,
		state: "Pendiente",
		value: 6,
	},
	{
		name: "Sustento Técnico",
		title: "Sustento Técnico Legal",
		description: "Documentación de sustento técnico e informe vinculante.",
		children: <Support />,
		icon: File,
		state: "Pendiente",
		value: 7,
	},
	
];
