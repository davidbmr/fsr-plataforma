import { useState } from "react";
import styles from "./Content.module.css";
import { useLocation } from "react-router";

// Icons
import { File, Files, HistoryIcon, Ruler, Save } from "lucide-react";

// Types
import type { Range, RenderDocumentProps } from "@/vite-env";

// Components
import { ProgressBar } from "@/components/custom/ProgressBar/ProgressBar";
import { Divider } from "@/components/custom/Divider/Divider";
import { ContentBox } from "@/components/layout/ContentBox/ContentBox";
import { Button } from "@/components/custom/Button/Button";
import { Stepper } from "@/components/custom/Stepper/Stepper";

// Views
import { LicenceStep } from "./views/Licence/Licence";
import { History } from "./views/History/History";
import { Property } from "./views/Property/Property";
import { Documents } from "./views/Documents/Documents";
import { Records } from "./views/Records/Records";
import { Dossier } from "./views/Dossier/Dossier";

export const Content = () => {
	const location = useLocation();
	const [step, setStep] = useState<Range<6>>(1);
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
		name: "Antecedentes",
		title: "Antecedentes",
		description:
			"Seleccione un anteproyecto aprobado para importar sus datos o ingrese la información manualmente.",
		children: <History />,
		icon: HistoryIcon,
		state: "Completado",
		value: 2,
	},
	{
		name: "Predio",
		title: "Datos del Predio",
		description:
			"Seleccione un anteproyecto aprobado para importar sus datos o ingrese la información manualmente.",
		children: <Property />,
		icon: Ruler,
		state: "Completado",
		value: 3,
	},
	{
		name: "Documentos",
		title: "Documentos FSR",
		description:
			"Seleccione un anteproyecto aprobado para importar sus datos o ingrese la información manualmente.",
		children: <Documents />,
		icon: File,
		state: "Completado",
		value: 4,
	},
	{
		name: "Expediente",
		title: "Expediente y Notificaciones",
		description: "Gestión del expediente municipal y notificaciones.",
		children: <Dossier />,
		icon: File,
		state: "Pendiente",
		value: 5,
	},
	{
		name: "Actas",
		title: "Actas por Especialidad",
		description: "Gestión de actas de cada especialidad.",
		children: <Records />,
		icon: File,
		state: "Pendiente",
		value: 6,
	},
];
