import styles from "./SelectDraftsModal.module.css";
import { Paginator } from "primereact/paginator";
import { Input } from "@/components/custom/Input/Input";
import { Button } from "@/components/custom/Button/Button";
import { RotateCw } from "lucide-react";
import { Card } from "./components/Card/Card"; // Card Component for draft list
interface DraftModalProps {
	onClick: () => void;
}

export const DraftModal = ({ onClick }: DraftModalProps) => {
	return (
		<div className={styles.content}>
			<div className={styles.input_filter}>
				<Input className={styles.input} placeholder="Buscar Anteproyecto" />
				<Button
					className={`${styles.button}`}
					text={false}
					children={<RotateCw color="#000" className={styles.rotating} />}
				/>
			</div>
			<div className={styles.list}>
				<Paginator />
				<div className={styles.list__item}>
					{mockDraft.map((item, key) => (
						<div onClick={() => onClick()}>
							<Card {...item} key={key} />
						</div>
					))}
				</div>
				<Paginator />
			</div>
		</div>
	);
};
const mockDraft = [
	{
		title: "Anteproyecto Edificio Residencial San Borja",
		expediente: "EXP-2023-AP-045",
		client: "Inversiones Inmobiliarias San Borja S.A.C.",
		status: "Activo",
		documents: [
			"Partida Registral.pdf",
			"Planos de Arquitectura.pdf",
			"Memoria Descriptiva.pdf",
			"Estudio de Suelos.pdf",
			"Licencia de Construcción.pdf",
			"Documento adicional 1.pdf",
			"Documento adicional 2.pdf",
		],
		progressValue: 80,
	},
	{
		title: "Anteproyecto Edificio Residencial San Borja",
		expediente: "EXP-2023-AP-045",
		client: "Inversiones Inmobiliarias San Borja S.A.C.",
		status: "Activo",
		documents: [
			"Partida Registral.pdf",
			"Planos de Arquitectura.pdf",
			"Memoria Descriptiva.pdf",
			"Estudio de Suelos.pdf",
			"Licencia de Construcción.pdf",
			"Documento adicional 1.pdf",
			"Documento adicional 2.pdf",
		],
		progressValue: 80,
	},
	{
		title: "Anteproyecto Edificio Residencial San Borja",
		expediente: "EXP-2023-AP-045",
		client: "Inversiones Inmobiliarias San Borja S.A.C.",
		status: "Activo",
		documents: [
			"Partida Registral.pdf",
			"Planos de Arquitectura.pdf",
			"Memoria Descriptiva.pdf",
			"Estudio de Suelos.pdf",
			"Licencia de Construcción.pdf",
			"Documento adicional 1.pdf",
			"Documento adicional 2.pdf",
		],
		progressValue: 80,
	},
];
