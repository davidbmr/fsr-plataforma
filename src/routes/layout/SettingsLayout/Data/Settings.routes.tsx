import { PencilIcon, PlusIcon, Users, Users2 } from "lucide-react";

interface DataInterface {
	name: string;
	icon: LucideIconType;
	href: string;
	description: string;
}

export const data: DataInterface[] = [
	{
		name: "Gestión de Usuarios",
		description: "Configuración y Gestión de Usuarios de FSR",
		icon: Users,
		href: "/settings/users-management",
	},
	{
		name: "Gestión de Administrados",
		description: "Configuración y Gestión de Administrados de FSR",
		icon: Users2,
		href: "/settings/customer-management",
	},
];
export const title_data: DataInterface[] = [
	...data,
	{
		name: "Nuevo Administrado",
		description: "Configuración y Gestión de Administrados de FSR",
		icon: PlusIcon,
		href: "/settings/customer-management/create",
	},
	{
		name: "Gestionar Administrado",
		description: "Configuración y Gestión de Administrados de FSR",
		icon: PencilIcon,
		href: "^\\/settings\\/customer-management\\/\\d+$",
	},
];
