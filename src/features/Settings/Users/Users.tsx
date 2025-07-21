/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./Users.module.css";
import { Select } from "@/components/custom/Select/Select";
import { Input } from "@/components/custom/Input/Input";
import { DataTable } from "@/components/custom/Datatable/Datatable";
import { useModal } from "@/hooks/useModal";
import { MenuModel } from "@/consts/MenuModel";
import { PrimeModal } from "@/components/custom/Dialog/Dialog";
import { useFormik } from "formik";
import { Button } from "@/components/custom/Button/Button";

interface Data {
	id: string;
	email: string;
	name: string;
	date: string;
	state: boolean;
	role: string;
}

export const Users = () => {
	const userModal = useModal();
	const { values, handleChange, handleSubmit, resetForm, setFieldValue, setValues } = useFormik<
		Omit<Data, "id" | "state" | "date"> & {
			passsword?: string;
			mode: "create" | "update" | undefined;
		}
	>({
		initialValues: {
			email: "",
			name: "",
			passsword: "",
			role: "",
			mode: undefined,
		},
		onSubmit: (values) => {
			if (values.mode === "create") {
				console.log("Creando Datos: ", values);
			} else {
				console.log("Actualizando Datos: ", values);
			}
		},
	});
	const onCreate = () => {
		resetForm();
		setFieldValue("mode", "create");
		userModal.onChangeStatus();
	};
	const menu = MenuModel<Data>({
		onUpdate: (e) => {
			const data = e?.rowData;
			if (data) {
				const { id, state, ...rest } = data;
				setValues({
					...rest,
					mode: "update",
				});
				userModal.onChangeStatus();
			}
		},
		onDelete: (e) => {
			alert(`Deleting data with ID: ${e?.rowData.id}`);
		},
	});
	return (
		<>
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
				<DataTable columns={columns} value={data} onCreate={onCreate} MenuProps={{ model: menu }} />
			</div>
			<PrimeModal
				header={values.mode === "create" ? "Agregar Nuevo Usuario." : "Editar Usuario."}
				modalStatus={userModal.status}
				onHideModal={userModal.onChangeStatus}
			>
				<form noValidate onSubmit={handleSubmit} className={styles.form}>
					<Input
						name="name"
						value={values.name}
						onChange={handleChange}
						label="Nombre Completo"
						placeholder="John Doe"
					/>
					<Input
						name="email"
						type="email"
						value={values.email}
						onChange={handleChange}
						label="Email"
						placeholder="johndoe@gmail.com"
					/>
					<Input
						name="password"
						type="password"
						value={values.passsword}
						onChange={handleChange}
						label="Contraseña"
						placeholder="..."
					/>
					<Select name="role" value={values.role} onChange={handleChange} label="Rol" />
					<div className={styles.form__button_container}>
						<Button className={styles.form__button} label={values.mode === "create" ? "Crear Usuario" : "Actualizar Usuario"} />
					</div>
				</form>
			</PrimeModal>
		</>
	);
};
const columns = [
	{ nombre: "Email", campo: "email" },
	{ nombre: "Nombre", campo: "name" },
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
	{ nombre: "Rol", campo: "role" },
];
const data: Data[] = [
	{
		id: "1",
		email: "imadelg14@gmail.com",
		name: "Adel Gannem",
		date: "14/11/2025",
		state: true,
		role: "ADMIN",
	},
	{
		id: "2",
		email: "imadelg14@gmail.com",
		name: "Adel Gannem",
		date: "14/11/2025",
		state: true,
		role: "ADMIN",
	},
	{
		id: "3",
		email: "imadelg14@gmail.com",
		name: "Adel Gannem",
		date: "14/11/2025",
		state: true,
		role: "ADMIN",
	},
];
