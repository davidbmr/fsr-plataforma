import { useState } from "react";
import styles from "./Content.module.css";
import { useLocation } from "react-router";

// Icons
import { Check, File, FileBadge, Files, InfoIcon, MapPin, Save, User } from "lucide-react";

// Types
import type { Range, RenderDocumentProps } from "@/vite-env";

// Components
import { ContentBox } from "@/components/layout/ContentBox/ContentBox";
import { Stepper } from "@/components/custom/Stepper/Stepper";
import { ProgressBar } from "@/components/custom/ProgressBar/ProgressBar";
import { Divider } from "@/components/custom/Divider/Divider";
import { Button } from "@/components/custom/Button/Button";

// Views
import { ManagedStep } from "./views/ManagedStep/ManagedStep";
import { DocumentsStep } from "./views/DocumentsStep/DocumentsStep";
import { LicenceStep } from "./views/LicenceStep/LicenceStep";
import { PropertyStep } from "./views/PropertyStep/PropertyStep";

export const Content = () => {
	const location = useLocation();
	const [step, setStep] = useState<Range<4>>(1);
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
					<div className={styles.section}>
						<h5>Documentos Obligatorios</h5>
						<div className={styles.items}>
							{validators.map((item, key) => (
								<div key={key} className={styles.section__item}>
									<div>
										{item.state ? (
											<Check color="green" width={15} height={15} />
										) : (
											<InfoIcon color="#ff8000" width={15} height={15} />
										)}
										<h6>{item.title}</h6>
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
const validators = [
	{ title: "Partida Registral (SUNARP)", state: false },
	{ title: "Certificado de parámetros (MUNICIPALIDAD)", state: false },
	{ title: "Plano de Ubicación", state: false },
	{ title: "Plano de Arquitectura", state: false },
	{ title: "Plano de Seguridad", state: false },
	{ title: "Memoria descriptiva de arquitectura", state: false },
	{ title: "Memoria descriptiva de seguridad", state: false },
	{ title: "FUE (Formulario Único de Edificación)", state: false },
	{ title: "Pago derecho de revisión (CAP) - Factura", state: false },
	{ title: "Pago derecho de revisión (CAP) - Liquidación", state: false },
];

const options: RenderDocumentProps[] = [
	{
		name: "Licencias",
		title: "Tipo de Licencia",
		description:
			"Seleccione un anteproyecto aprobado para importar sus datos o ingrese la información manualmente.",
		children: <LicenceStep />,
		icon: FileBadge,
		state: "Completado",
		value: 1,
	},
	{
		name: "Administrado",
		title: "Datos del Administrado",
		description: "Información de la persona o empresa solicitante",
		children: <ManagedStep />,
		icon: User,
		state: "Completado",
		value: 2,
	},
	{
		name: "Predio",
		title: "Datos del Predio",
		description: "Información sobre los datos del terreno y sus medidas",
		children: <PropertyStep />,
		icon: MapPin,
		state: "Pendiente",
		value: 3,
	},
	{
		name: "Documentos",
		title: "Documentos Requeridos",
		description: "Adjunta los documentos necesarios para el expediente de anteproyecto",
		children: <DocumentsStep />,
		icon: File,
		state: "Pendiente",
		value: 4,
	},
];
