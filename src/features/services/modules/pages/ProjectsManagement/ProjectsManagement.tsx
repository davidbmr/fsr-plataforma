import styles from "./ProjectsManagement.module.css";
import { Card, type CardProps } from "../../components/Card/Card";
import { useLocation, useNavigate } from "react-router";
import { Filter } from "../../components/Filter/Filter";
import { Button } from "@/components/custom/Button/Button";
import { Plus } from "lucide-react";
import { Paginator } from "primereact/paginator";

export const ProjectsManagement = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const onCreate = () => {
		navigate(`${location.pathname}/create`);
	};
	return (
		<div className={styles.content}>
			<div className={styles.header}>
				<Filter options={options} />
				<Button icon={<Plus />} className={styles.button} onClick={onCreate}>
					Nuevo Trámite
				</Button>
			</div>
			<div className={styles.modules}>
				{data.map((item, key) => {
					return <Card key={key} {...item} />;
				})}
			</div>
			<div className={styles.paginator__container}>
				<Paginator className={styles.paginator} />
			</div>
		</div>
	);
};
const options = [
	{ name: "Todos", value: "1" },
	{ name: "Activos", value: "2" },
	{ name: "Completados", value: "3" },
];
const data: CardProps[] = [
	{
		id: 1,
		title: "Nombre de expediente",
		description: "Descripcion del expediente",
		client: "Cliente A",
		responsible: "Responsable A",
		created_at: "11/06/2025",
		updated_at: "11/06/2025",
		state: "Activo",
		progress: 3,
		progress__var: 25,
	},
	{
		id: 2,
		title: "Nombre de expediente",
		description: "Descripcion del expediente",
		client: "Cliente B",
		responsible: "Responsable B",
		created_at: "11/06/2025",
		updated_at: "11/06/2025",
		state: "Activo",
		progress: 2,
		progress__var: 25,
	},
	{
		id: 3,
		title: "Nombre de expediente",
		description: "Descripcion del expediente",
		client: "Cliente C",
		responsible: "Responsable C",
		created_at: "11/06/2025",
		updated_at: "11/06/2025",
		state: "Completado",
		progress: 4,
		progress__var: 25,
	},
	{
		id: 4,
		title: "Nombre de expediente",
		description: "Descripcion del expediente",
		client: "Cliente D",
		responsible: "Responsable D",
		created_at: "11/06/2025",
		updated_at: "11/06/2025",
		state: "Completado",
		progress: 4,
		progress__var: 25,
	},
	{
		id: 5,
		title: "Nombre de expediente",
		description: "Descripcion del expediente",
		client: "Cliente E",
		responsible: "Responsable E",
		created_at: "11/06/2025",
		updated_at: "11/06/2025",
		state: "Completado",
		progress: 4,
		progress__var: 25,
	},
];
