import { useState } from "react";

interface UsePaginationProps {
	totalItems: number;
	itemsPerPage?: number;
	initialPage?: number;
}

interface UsePaginationReturn {
	currentPage: number;
	totalPages: number;
	itemsPerPage: number;
	startIndex: number;
	endIndex: number;
	goToPage: (page: number) => void;
	goToNextPage: () => void;
	goToPreviousPage: () => void;
	goToFirstPage: () => void;
	goToLastPage: () => void;
	setItemsPerPage: (items: number) => void;
	getVisiblePages: (maxVisible?: number) => number[];
	getCurrentPageData: <T>(data: T[]) => T[];
	resetPagination: () => void;
	isFirstPage: boolean;
	isLastPage: boolean;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

export const usePagination = ({
	totalItems,
	itemsPerPage = 10,
	initialPage = 1,
}: UsePaginationProps): UsePaginationReturn => {
	const [currentPage, setCurrentPage] = useState(initialPage);
	const [perPage, setPerPage] = useState(itemsPerPage);

	const totalPages = Math.ceil(totalItems / perPage);
	const startIndex = (currentPage - 1) * perPage;
	const endIndex = Math.min(startIndex + perPage, totalItems);

	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const goToFirstPage = () => {
		setCurrentPage(1);
	};

	const goToLastPage = () => {
		setCurrentPage(totalPages);
	};

	const setItemsPerPage = (items: number) => {
		setPerPage(items);
		setCurrentPage(1); // Reset a la primera página
	};

	const getVisiblePages = (maxVisible = 5) => {
		const pages: number[] = [];
		const halfVisible = Math.floor(maxVisible / 2);

		let start = Math.max(1, currentPage - halfVisible);
		const end = Math.min(totalPages, start + maxVisible - 1);

		// Ajustar si estamos cerca del final
		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	};

	const getCurrentPageData = <T,>(data: T[]): T[] => {
		return data.slice(startIndex, endIndex);
	};

	const resetPagination = () => {
		setCurrentPage(1);
	};

	return {
		currentPage,
		totalPages,
		itemsPerPage: perPage,
		startIndex,
		endIndex,
		goToPage,
		goToNextPage,
		goToPreviousPage,
		goToFirstPage,
		goToLastPage,
		setItemsPerPage,
		getVisiblePages,
		getCurrentPageData,
		resetPagination,
		isFirstPage: currentPage === 1,
		isLastPage: currentPage === totalPages,
		hasNextPage: currentPage < totalPages,
		hasPreviousPage: currentPage > 1,
	};
};
