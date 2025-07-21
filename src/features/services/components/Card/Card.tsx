import styles from "./Card.module.css";
import { useNavigate } from "react-router";
import { Check, Clock } from "lucide-react";

export interface CardProps {
	title: string;
	description: string;
	href: string;
	pending: number;
	completed: number;
	actives: number;
}

export const Card = ({ ...rest }: CardProps) => {
	const navigate = useNavigate();
	return (
		<div className={styles.card__component} onClick={() => navigate(rest.href)}>
			<div className={styles.card__content}>
				<div>
					<h2>{rest.title}</h2>
					<div className={styles.active__button}>
						<label>{rest.actives} activos</label>
					</div>
				</div>
				<p>{rest.description}</p>
			</div>
			<div className={styles.card__footer}>
				<label className={styles.info__label}>
					<Clock color="blue" />
					{rest.pending}
					{rest.pending === 1 ? " pendiente" : " pendientes"}
				</label>
				<label className={styles.info__label}>
					<Check color="green" />
					{rest.completed}
					{rest.completed === 1 ? " completada" : " completadas"}
				</label>
			</div>
		</div>
	);
};
