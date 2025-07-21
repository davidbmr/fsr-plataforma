import { type ReactNode, useRef } from "react";
import styles from "./Datatable.module.css";
import { Column, type ColumnProps } from "primereact/column";
import {
	DataTable as PrimeDataTable,
	type DataTableBaseProps,
	type DataTableValueArray,
	type DataTableStateEvent,
} from "primereact/datatable";
import { Menu, type MenuProps } from "primereact/menu";
import type { MenuItemCommandEvent } from "primereact/menuitem";
import { Button } from "../Button/Button";
import { Plus, FileSpreadsheet, MoreVertical } from "lucide-react";

export interface CustomMenuItemCommandEvent<T> extends MenuItemCommandEvent {
	rowData: T;
}

interface CustomColumnProps extends ColumnProps {
	campo?: string;
	nombre: string;
	width?: string;
}

interface PrimeDataTableProps<TValue extends DataTableValueArray>
	extends DataTableBaseProps<TValue> {
	children?: ReactNode;
	columns: CustomColumnProps[];
	MenuProps?: MenuProps;
	onCreate?: () => void;
	onExport?: () => void;
	isHeaderActive?: boolean;
	HeaderChildren?: ReactNode;

	// Props para paginación backend
	lazy?: boolean;
	onPage?: (event: DataTableStateEvent) => void;
	totalRecords?: number;
	first?: number;
	rows?: number;
	loading?: boolean;
}

export const DataTable = <TValue extends DataTableValueArray>({
	children,
	columns,
	MenuProps,
	onCreate,
	onExport,
	isHeaderActive,
	HeaderChildren,
	lazy,
	onPage,
	totalRecords,
	first = 0,
	rows = 5,
	loading = false,
	value,
	paginator = true,
	...rest
}: PrimeDataTableProps<TValue>) => {
	const OptionsMenu = (rowData: TValue) => {
		const menuRef = useRef<Menu>(null);
		const model = MenuProps?.model;
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "5px",
				}}
			>
				{MenuProps && model && (
					<>
						<Button
							type="button"
							icon={<MoreVertical size={18} />}
							className={styles.optionsButton}
							onClick={(event) => menuRef.current?.toggle(event)}
							text
						/>
						<Menu
							model={model.map((item) => ({
								label: item.label,
								icon: item.icon,
								command: (event: CustomMenuItemCommandEvent<TValue>) => {
									const modifiedEvent = {
										...event,
										rowData,
									};
									if (item.command) item.command(modifiedEvent);
								},
							}))}
							popup
							ref={menuRef}
						/>
					</>
				)}
			</div>
		);
	};

	const header = () => (
		<div className={styles.header}>
			<div className={styles.header__filter}>{HeaderChildren}</div>
		</div>
	);

	return (
		<>
			<PrimeDataTable
				value={value}
				lazy={lazy}
				loading={loading}
				paginator={paginator}
				rowsPerPageOptions={[5, 10, 25, 50]}
				paginatorClassName={`${styles.paginator} ${rest.paginatorClassName}`}
				rows={rows}
				first={first}
				totalRecords={totalRecords}
				onPage={onPage}
				size={rest.size || "small"}
				stripedRows={rest.stripedRows || false}
				showGridlines={rest.showGridlines || false}
				className={`${styles.datatable} ${rest.className}`}
				emptyMessage={rest.emptyMessage || "No se han encontrado resultados."}
				header={isHeaderActive ? rest.header || header : undefined}
				paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
				currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords}"
				pt={{
					paginator: {
						root: {
							style: {
								border: "none",
							},
						},
					},
				}}
			>
				{columns.map((item, key) => (
					<Column
						key={key}
						field={item.campo || item.field}
						body={item.body}
						sortable={item.sortable ?? true}
						header={item.nombre || item.header}
						style={{
							width: item.width,
							minWidth: "25px",
							fontSize: "13px",
						}}
						headerClassName={`${styles.header__cells} ${item.headerClassName}`}
						bodyClassName={`${styles.body__cells} ${item.bodyClassName}`}
						footerClassName={`${styles.footer}`}
						className={`${styles.cells} ${item.className}`}
						{...item}
					/>
				))}
				{MenuProps?.model && (
					<Column
						header="Opciones"
						body={OptionsMenu}
						style={{ width: "5%" }}
						headerClassName={`${styles.header__cells}`}
						bodyClassName={`${styles.body__cells}`}
					/>
				)}
			</PrimeDataTable>

			<>
				{children}
				<div className={styles.buttons}>
					{onCreate && (
						<Button
							label="Agregar"
							icon={<Plus size={16} />}
							iconPos="left"
							onClick={() => onCreate()}
							className={styles.createButton}
						/>
					)}
					{onExport && (
						<Button
							label="Importar"
							type="button"
							icon={<FileSpreadsheet size={16} />}
							iconPos="right"
							severity="secondary"
							onClick={() => onExport()}
							data-pr-tooltip="XLS"
							className={styles.exportButton}
						/>
					)}
				</div>
			</>
		</>
	);
};
