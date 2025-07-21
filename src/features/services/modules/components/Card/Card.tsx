import styles from "./Card.module.css";
import { useLocation, useNavigate } from "react-router";
import { Calendar, Clock, UserPen, UsersRound } from "lucide-react";
import { ProgressBar } from "@/components/custom/ProgressBar/ProgressBar";

export interface CardProps {
	id: string | number;
	title: string;
	description: string;
	client: string;
	responsible: string;
	created_at: string;
	updated_at: string;
	state: "Activo" | "Completado";
	progress: 0 | 1 | 2 | 3 | 4 | 5;
	progress__var: 25 | 20;
}

export const Card = ({ ...rest }: CardProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const onNavigate = () => {
		navigate(`${location.pathname}/${rest.id}`);
	};
	return (
		<div className={styles.card} onClick={onNavigate}>
			<div className={styles.title}>
				<h1>{rest.title}</h1>
				<div>
					<p>{rest.state}</p>
				</div>
			</div>
			<div className={styles.description}>
				<p>{rest.description}</p>
			</div>
			<div className={styles.info}>
				<label>
					<UsersRound color="#007C88" width={20} height={20} />
					Administrado: {rest.client}
				</label>
				<label>
					<UserPen color="#007C88" width={20} height={20} />
					Responsable: {rest.responsible}
				</label>
				<label>
					<Calendar color="#007C88" width={20} height={20} />
					Creado: {rest.created_at}
				</label>
				<label>
					<Clock color="#007C88" width={20} height={20} />
					Actualizado: {rest.updated_at}
				</label>
			</div>
			<div className={styles.progress__bar}>
				<ProgressBar value={rest.progress__var * rest.progress} max={100} />
			</div>
		</div>
	);
};
