/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from "react";

interface UseFilterProps<T> {
	data: T[];
	filterField: keyof T;
	filterType?: "includes" | "startsWith" | "endsWith" | "exact";
	caseSensitive?: boolean;
	debounceMs?: number;
}

interface UseFilterReturn<T> {
	filteredData: T[];
	filterValue: string;
	setFilterValue: (value: string) => void;
	hasResults: boolean;
	totalResults: number;
	clearFilter: () => void;
	resetFilter: () => void;
}

export const useFilter = <T,>({
	data,
	filterField,
	filterType = "includes",
	caseSensitive = false,
}: UseFilterProps<T>): UseFilterReturn<T> => {
	const [filterValue, setFilterValue] = useState("");

	// Función de filtrado
	const filterFunction = (item: T, searchTerm: string): boolean => {
		const fieldValue = String(item[filterField]);
		const searchValue = caseSensitive ? searchTerm : searchTerm.toLowerCase();
		const itemValue = caseSensitive ? fieldValue : fieldValue.toLowerCase();

		switch (filterType) {
			case "includes":
				return itemValue.includes(searchValue);
			case "startsWith":
				return itemValue.startsWith(searchValue);
			case "endsWith":
				return itemValue.endsWith(searchValue);
			case "exact":
				return itemValue === searchValue;
			default:
				return itemValue.includes(searchValue);
		}
	};

	// Filtrar datos
	const filteredData = useMemo(() => {
		if (!filterValue.trim()) return data;

		return data.filter((item) => filterFunction(item, filterValue));
	}, [data, filterValue, filterType, caseSensitive]);

	const clearFilter = () => {
		setFilterValue("");
	};

	const resetFilter = () => {
		setFilterValue("");
	};

	return {
		filteredData,
		filterValue,
		setFilterValue,
		hasResults: filteredData.length > 0,
		totalResults: filteredData.length,
		clearFilter,
		resetFilter,
	};
};
