import styles from "./SelectDraft.module.css";
import { Button } from "@/components/custom/Button/Button";
import { PrimeModal } from "@/components/custom/Dialog/Dialog";
import { useModal } from "@/hooks/useModal";
import { File, InfoIcon, Search } from "lucide-react";
import { DraftModal } from "@/components/dialogs/SelectDrafts/SelectDraftsModal";
import { useState } from "react";
import { useLocation } from "react-router";
import { Input } from "@/components/custom/Input/Input";
import { Textarea } from "@/components/custom/Textarea/Textarea";

export const SelectDraft = () => {
	const location = useLocation();
	const draftModal = useModal();
	const [isActive, setIsActive] = useState(!location.pathname.endsWith("create"));
	const onSelect = () => {
		setIsActive(!isActive);
		draftModal.onChangeStatus();
	};

	return (
		<>
			<div className={styles.content}>
				<div className={styles.search__container}>
					<div className={styles.search__label}>
						<label>Seleccionar Anteproyecto</label>
						<p>Importa los datos de un anteproyecto existente para continuar con el proyecto.</p>
					</div>
					<div>
						<Button
							label="Buscar Anteproyecto"
							icon={<Search style={{ paddingRight: "10px" }} />}
							className={styles.button}
							onClick={draftModal.onChangeStatus}
						/>
					</div>
				</div>
				{!isActive ? (
					<div className={styles.draft__unset}>
						<InfoIcon />
						<div>
							<label>No hay anteproyecto seleccionado</label>
							<p>
								Selecciona un anteproyecto existente para importar sus datos o continúa con el
								formulario para ingresar la información manualmente.
							</p>
						</div>
					</div>
				) : (
					<>
						<hr style={{ color: "#E9E9E9" }} />
						<div className={styles.draft__seted}>
							<div>
								<h4>Datos importados del anteproyecto</h4>
								<div className={styles.inputs}>
									<Input label="Titulo del proyecto" disabled />
									<Input label="Cliente" disabled />
									<Input label="Dirección" disabled />
									<Input label="Tipo de proyecto" disabled />
								</div>
								<div>
									<Textarea label="Descripción del proyecto" disabled />
								</div>
							</div>
							<div>
								<h4>Documentos disponibles:</h4>
								<div className={styles.documents}>
									{documents.map((item, key) => {
										return (
											<div className={styles.document} key={key}>
												<div>
													<File size={20} color="#6ad56a" />
													<h5>{item.name}</h5>
												</div>
												<label>Subido el {item.date}</label>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className={styles.footer__button}>
							<Button label="Guardar" />
						</div>
					</>
				)}
			</div>
			<PrimeModal
				header="Seleccionar Anteproyecto"
				description="Busque y seleccione un anteproyecto existente para importar sus datos"
				onHideModal={draftModal.onChangeStatus}
				modalStatus={draftModal.status}
				width="750"
			>
				<DraftModal onClick={onSelect} />
			</PrimeModal>
		</>
	);
};
const documents = [
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
	{
		name: "Partida Registral.pdf",
		date: "10/11/2023",
	},
];
