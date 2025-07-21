import { Wrench, BarChart3, HandPlatter } from "lucide-react";

export const route_data = [
	{
		title: "Dashboard",
		content_title: "Dashboard",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar.",
		icon: <BarChart3 />,
		href: "/dashboard",
	},
	{
		title: "Servicios",
		content_title: "Servicios",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar.",
		icon: <HandPlatter />,
		href: "/service",
	},
	{
		title: "Configuración",
		content_title: "Configuración",
		content_description: "Administración y Parametrización del sistema.",
		icon: <Wrench />,
		href: "/settings",
	},
];
