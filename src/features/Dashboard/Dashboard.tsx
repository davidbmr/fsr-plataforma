import styles from "./Dashboard.module.css";
import type { Nullable } from "primereact/ts-helpers";
import { DateField } from "@/components/custom/DateField/DateField";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useState } from "react";
import { Chips } from "primereact/chips";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export const Dashboard = () => {
	const [filter, setFilter] = useState<{
		filter_type: "daily" | "weekly" | "monthly" | "yearly" | "range";
		employee: string[];
		date: Nullable<(Date | null)[]>;
	}>({
		filter_type: "daily",
		date: null,
		employee: [],
	});

	const chartData = {
		labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
		datasets: [
			{
				label: "Proyectos Completados",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
			{
				label: "Anteproyectos Completados",
				data: [5, 9, 6, 15, 7, 13],
				backgroundColor: "rgba(51, 111, 151, 0.5)",
			},
		],
	};

	const pieData = {
		labels: ["Proyectos Aprobados", "Proyectos Pendientes", "Proyectos Rechazados", "En Revisión"],
		datasets: [
			{
				data: [45, 25, 15, 15],
				backgroundColor: [
					"rgba(75, 192, 192, 0.8)",
					"rgba(255, 205, 86, 0.8)",
					"rgba(255, 99, 132, 0.8)",
					"rgba(153, 102, 255, 0.8)",
				],
				borderColor: [
					"rgba(75, 192, 192, 1)",
					"rgba(255, 205, 86, 1)",
					"rgba(255, 99, 132, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 2,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Proyectos por Mes",
			},
		},
	};

	const pieOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom" as const,
			},
			title: {
				display: true,
				text: "Estado de Proyectos",
			},
		},
	};
	const onChangeFilter = (name: "daily" | "weekly" | "monthly" | "yearly" | "range") => {
		setFilter((prev) => {
			return {
				...prev,
				filter_type: name,
				date: null,
			};
		});
	};

	const filterOptions = [
		{ key: "daily", label: "Día" },
		{ key: "weekly", label: "Semana" },
		{ key: "monthly", label: "Mensual" },
		{ key: "yearly", label: "Anual" },
	];

	return (
		<div className={styles.dashboard}>
			<div className={styles.filter}>
				<div className={styles.input}>
					<label>Encargado/s: </label>
					<Chips
						className={styles.chips}
						value={filter.employee}
						onChange={(e) =>
							setFilter((prev) => {
								return {
									...prev,
									employee: e?.value || [],
								};
							})
						}
					/>
				</div>
				<div className={styles.filter__container}>
					<ul className={styles.filter__list}>
						{filterOptions.map((option) => (
							<li
								key={option.key}
								className={styles.filter__item}
								onClick={() =>
									onChangeFilter(option.key as "daily" | "weekly" | "monthly" | "yearly")
								}
								data-selected={filter.filter_type === option.key}
							>
								{option.label}
							</li>
						))}
						<li className={styles.filter__item} data-selected={filter.filter_type === "range"}>
							<DateField
								selectionMode="range"
								readOnlyInput
								value={filter.date}
								onChange={(e) =>
									setFilter((prev) => {
										return {
											...prev,
											date: e?.value,
											filter_type: "range",
										};
									})
								}
								placeholder="Seleccionar rango"
								showButtonBar
							/>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.chart_info__container}>
				<div className={styles.chart__info}>
					<h4>Completados</h4>
					<h5>500</h5>
					<p>
						<strong>20%</strong> Mejor que el mes pasado
					</p>
				</div>
				<div className={styles.chart__info}>
					<h4>Pendientes</h4>
					<h5>320</h5>
					<p>
						<strong>20%</strong> Mejor que el mes pasado
					</p>
				</div>
			</div>
			<div className={styles.chart__container}>
				<div className={styles.chart__bar}>
					<Bar options={options} data={chartData} />
				</div>
				<div className={styles.chart__pie}>
					<Pie options={pieOptions} data={pieData} />
				</div>
			</div>
		</div>
	);
};
