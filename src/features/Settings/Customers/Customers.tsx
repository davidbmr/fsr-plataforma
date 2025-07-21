import styles from "./Customers.module.css";
import { Select } from "@/components/custom/Select/Select";
import { Input } from "@/components/custom/Input/Input";
import { DataTable } from "@/components/custom/Datatable/Datatable";
import { useLocation, useNavigate } from "react-router";
import { MenuModel } from "@/consts/MenuModel";
interface Data {
	id: string;
	email: string;
	name: string;
	date: string;
	state: boolean;
}

export const Customers = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const menu = MenuModel<Data>({
		onUpdate: (e) => {
			navigate(`${location.pathname}/${e?.rowData.id}`);
		},
		onDelete: (e) => {
			alert(`Deleting data with ID: ${e?.rowData.id}`);
		},
	});
	return (
		<div className={styles.content}>
			<div className={styles.filter}>
				<Select
					placeholder="Filtrar por:"
					direction="row"
					options={[
						{ name: "Nombre", value: "1" },
						{ name: "Email", value: "2" },
						{ name: "Rol", value: "3" },
						{ name: "Estado", value: "4" },
					]}
				/>
				<Input label="" />
			</div>
			<DataTable
				columns={columns}
				value={data}
				onCreate={() => {
					navigate(`${location.pathname}/create`);
				}}
				MenuProps={{
					model: menu,
				}}
			/>
		</div>
	);
};
const columns = [
	{ nombre: "ID", campo: "id" },
	{ nombre: "Email", campo: "email" },
	{ nombre: "Nombre / Razón Social", campo: "name" },
	{ nombre: "Fecha", campo: "date" },
	{
		nombre: "Status",
		campo: "state",
		body: (rowData: Data) => {
			return (
				<div className={styles.status} data-status={rowData.state}>
					{rowData.state ? "Activo" : "Inactivo"}
				</div>
			);
		},
	},
];
const data: Data[] = [
	{
		id: "1",
		email: "imadelg14@gmail.com",
		name: "Adel Gannem",
		date: "14/11/2025",
		state: false,
	},
	{
		id: "2",
		email: "imadelg14@gmail.com",
		name: "Adel Gannem",
		date: "14/11/2025",
		state: true,
	},
	{
		id: "3",
		email: "imadelg14@gmail.com",
		name: "Adel Gannem",
		date: "14/11/2025",
		state: true,
	},
];
