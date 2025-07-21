import { type CustomMenuItemCommandEvent } from "@/components/custom/Datatable/Datatable";
import { Download, Eye, Pencil, Trash } from "lucide-react";
import type { MenuItem } from "primereact/menuitem";

/**
 * Genera un modelo de menú con las opciones Editar, Ver y Eliminar.
 *
 * @template T El tipo de los datos que se pasarán a los eventos del menú.
 * @param {Object} param0 Las propiedades para configurar los eventos del menú.
 * @param {Function} param0.onEye Función a ejecutar cuando se selecciona la opción Ver.
 * @param {Function} param0.onUpdate Función a ejecutar cuando se selecciona la opción Editar.
 * @param {Function} param0.onDelete Función a ejecutar cuando se selecciona la opción Eliminar.
 * @param {MenuItem[]} [props.customActions] - Acciones personalizadas adicionales (opcional)
 * @returns {Array} Un arreglo de objetos que representan las opciones del menú.
 */

interface MenuModelProps<T> {
	onEye?: (e?: CustomMenuItemCommandEvent<T>) => void;
	onUpdate?: (e?: CustomMenuItemCommandEvent<T>) => void;
	onDelete?: (e?: CustomMenuItemCommandEvent<T>) => void;
	onExport?: (e?: CustomMenuItemCommandEvent<T>) => void;
	customActions?: Array<MenuItem>;
}

export function MenuModel<T>({
	onEye,
	onUpdate,
	onDelete,
	onExport,
	customActions = [],
}: MenuModelProps<T>): Array<MenuItem> {
	const defaultActions: Array<MenuItem | undefined> = [
		onEye && {
			label: "Ver",
			icon: <Eye className="menu__icon" />,
			command: (e: CustomMenuItemCommandEvent<T>) => onEye(e),
		},
		onUpdate && {
			label: "Editar",
			icon: <Pencil className="menu__icon" />,
			command: (e: CustomMenuItemCommandEvent<T>) => onUpdate(e),
		},
		onDelete && {
			label: "Eliminar",
			icon: <Trash className="menu__icon" />,
			command: (e: CustomMenuItemCommandEvent<T>) => onDelete(e),
		},
		onExport && {
			label: "Exportar",
			icon: <Download className="menu__icon" />,
			command: (e: CustomMenuItemCommandEvent<T>) => onExport(e),
		},
	];

	return [...defaultActions.filter((x): x is MenuItem => !!x), ...customActions];
}
