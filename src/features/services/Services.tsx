import styles from "./Services.module.css";
import { Paginator } from "primereact/paginator";
import { Card } from "./components/Card/Card";
import { modules } from "./data/modules_data";
import { Input } from "@/components/custom/Input/Input";
import { usePagination } from "@/hooks/usePagination";
import { useFilter } from "@/hooks/useFilter";

export const Services = () => {
	const {
		filteredData: filteredModules,
		filterValue,
		setFilterValue,
		hasResults,
	} = useFilter({
		data: modules,
		filterField: "title",
		filterType: "includes",
		caseSensitive: false,
		debounceMs: 300,
	});

	const { itemsPerPage, startIndex, goToPage, getCurrentPageData, resetPagination } = usePagination(
		{
			totalItems: filteredModules.length,
			itemsPerPage: 9,
			initialPage: 1,
		}
	);

	const currentPageModules = getCurrentPageData(filteredModules);

	const onPageChange = (event: { first: number; rows: number }) => {
		const newPage = Math.floor(event.first / event.rows) + 1;
		goToPage(newPage);
	};

	const handleFilterChange = (value: string) => {
		setFilterValue(value);
		resetPagination();
	};

	return (
		<div className={styles.content}>
			<div className={styles.filter}>
				<Input
					label="Servicios:"
					value={filterValue}
					onChange={(e) => handleFilterChange(e.target.value)}
					placeholder="Buscar por título..."
				/>
				{!hasResults && filterValue.trim() && (
					<div className={styles.noResults}>No se encontraron resultados para "{filterValue}"</div>
				)}
			</div>
			<div className={styles.modules}>
				{currentPageModules.map((item, key) => (
					<Card key={key} {...item} />
				))}
			</div>
			<div className={styles.footer__container}>
				<div className={styles.footer}>
					<Paginator
						first={startIndex}
						rows={itemsPerPage}
						totalRecords={filteredModules.length}
						onPageChange={onPageChange}
						template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
						rowsPerPageOptions={[9]}
					/>
				</div>
			</div>
		</div>
	);
};
