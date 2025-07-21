// Data para mostrar titulo y descripción de un modulo en el encabezado

import { route_data } from "./routes_data";

// rutas de configuración
const settings_data = [
	{
		content_title: "Gestión de Usuarios",
		content_description: "Configuración y Gestión de Usuarios de FSR",
		href: "/settings/users-management",
	},
	{
		content_title: "Gestión de Administrados",
		content_description: "Configuración y Gestión de Administrados de FSR",
		href: "/settings/customer-management",
	},
];

// rutas de anteproyecto
const drafts_data = [
	{
		content_title: "Expediente Técnico de Arquitectura para Anteproyecto",
		content_description:
			"Documentación técnica detallada para la evaluación y aprobación de proyectos arquitectónicos",
		href: "/service/drafts",
	},
	{
		content_title: "Nuevo Anteproyecto",
		content_description: "Gestión integral del anteproyecto con todas las especialidades",
		href: "/service/drafts/create",
	},
	{
		content_title: "Visualizar Expediente Técnico de Arquitectura para Anteproyecto",
		content_description: "Gestión integral del anteproyecto con todas las especialidades",
		href: "^\\/service\\/drafts\\/\\d+$",
	},
];

// rutas de anteproyecto
const drafts_management_data = [
	{
		content_title: "Expediente Técnico de Arquitectura para Géstion de Anteproyecto",
		content_description:
			"Documentación técnica detallada para la evaluación y aprobación de proyectos arquitectónicos",
		href: "/service/drafts-management",
	},
	{
		content_title: "Nuevo Anteproyecto",
		content_description: "Gestión integral del anteproyecto con todas las especialidades",
		href: "/service/drafts-management/create",
	},
	{
		content_title: "Visualizar Expediente Técnico de Arquitectura para Gestión Anteproyecto",
		content_description: "Gestión integral del anteproyecto con todas las especialidades",
		href: "^\\/service\\/drafts-management\\/\\d+$",
	},
];

// rutas de proyecto
const projects_data = [
	{
		content_title: "Proyectos",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/projects",
	},
	{
		content_title: "Nuevo Proyecto",
		content_description: "Gestión integral del proyecto con todas las especialidades",
		href: "/service/projects/create",
	},
	{
		content_title: "Visualizar Expediente Técnico de Arquitectura para Proyecto",
		content_description: "Gestión integral del proyecto con todas las especialidades",
		href: "^\\/service\\/projects\\/\\d+$",
	},
];

const projects_management_data = [
	{
		content_title: "Expediente Técnico de Arquitectura para Géstion de Proyecto",
		content_description:
			"Documentación técnica detallada para la evaluación y aprobación de proyectos arquitectónicos",
		href: "/service/projects-management",
	},
	{
		content_title: "Nuevo Proyecto",
		content_description: "Gestión integral del anteproyecto con todas las especialidades",
		href: "/service/projects-management/create",
	},
	{
		content_title: "Visualizar Expediente Técnico de Arquitectura para Gestión Proyecto",
		content_description: "Gestión integral del anteproyecto con todas las especialidades",
		href: "^\\/service\\/projects-management\\/\\d+$",
	},
];
const COW_data = [
	{
		content_title: "Conformidad de obra",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/conformity-of-work",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/conformity-of-work/create",
	},
	{
		content_title: "Gestionar Tramite de Conformidad de Obra",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/conformity-of-work\\/\\d+$",
	},
];
const COWM_data = [
	{
		content_title: "Gestión de conformidad de obra",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/conformity-of-work-management",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/conformity-of-work-management/create",
	},
	{
		content_title: "Gestionar Tramite de Gestión de conformidad de Obra",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/conformity-of-work-management\\/\\d+$",
	},
];
const ProjectModification_data = [
	{
		content_title: "Modificación de Proyecto",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/project-modification",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/project-modification/create",
	},
	{
		content_title: "Gestionar Tramite de Modificación de Proyecto",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/project-modification\\/\\d+$",
	},
];
const ProjectModificationManagement_data = [
	{
		content_title: "Gestión de Modificación de Proyecto",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/project-modification-management",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/project-modification-management/create",
	},
	{
		content_title: "Gestionar Tramite de Gestión de Modificación de Proyecto",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/project-modification-management\\/\\d+$",
	},
];
const ARD_data = [
	{
		content_title: "Ampliación / Remodelación / Demolición",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/ampliation-remodelation-demolition",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/ampliation-remodelation-demolition/create",
	},
	{
		content_title: "Gestionar Tramite de ARD",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/ampliation-remodelation-demolition\\/\\d+$",
	},
];
const ARDM_data = [
	{
		content_title: "Gestión de Ampliación / Remodelación / Demolición",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/ampliation-remodelation-demolition/management",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/ampliation-remodelation-demolition/management/create",
	},
	{
		content_title: "Gestionar Tramite de Gestión de ARD",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/ampliation-remodelation-demolition/management\\/\\d+$",
	},
];
const Demolition_data = [
	{
		content_title: "Demolición Total",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/demolition",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/demolition/create",
	},
	{
		content_title: "Gestionar Tramite de Demolición Total",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/demolition\\/\\d+$",
	},
];
const DemolitionManagement_data = [
	{
		content_title: "Gestión de Demolición",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/demolition-management",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/demolition-management/create",
	},
	{
		content_title: "Gestionar Tramite de Gestión de Demolición",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/demolition-management\\/\\d+$",
	},
];
const AnnexH_data = [
	{
		content_title: "Gestión del Anexo H",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/annex-h-management",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/annex-h-management/create",
	},
	{
		content_title: "Gestionar Tramite de Gestión del Anexo H",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/annex-h-management\\/\\d+$",
	},
];
const Regularization_data = [
	{
		content_title: "Regularización",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/regularization",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/regularization/create",
	},
	{
		content_title: "Gestionar Tramite de Regularización",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/regularization\\/\\d+$",
	},
];
const RegularizationManagement_data = [
	{
		content_title: "Gestión de Regularización",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/regularization-management",
	},
	{
		content_title: "Nuevo Trámite",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "/service/regularization-management/create",
	},
	{
		content_title: "Gestionar Tramite de Gestión de Regularización",
		content_description: "Gestiona todos tus trámites y servicios en un solo lugar",
		href: "^\\/service\\/regularization-management\\/\\d+$",
	},
];

// data dividida para mejorar legibilidad
const data = [
	...settings_data,
	...drafts_data,
	...drafts_management_data,
	...projects_data,
	...projects_management_data,
	...COW_data,
	...COWM_data,
	...ProjectModification_data,
	...ProjectModificationManagement_data,
	...ARD_data,
	...ARDM_data,
	...Demolition_data,
	...DemolitionManagement_data,
	...AnnexH_data,
	...Regularization_data,
	...RegularizationManagement_data,
	// Agregar más...
];

// Mapeo route_data para sacar el titulo y la descripción del contenido
export const header_data = [
	...route_data.map((item) => ({
		content_title: item.content_title,
		content_description: item.content_description,
		href: item.href,
	})),
	...data,
];
