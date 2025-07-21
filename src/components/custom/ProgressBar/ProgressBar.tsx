import styles from "./ProgressBar.module.css";

interface ProgressBarProps
	extends React.DetailedHTMLProps<
		React.ProgressHTMLAttributes<HTMLProgressElement>,
		HTMLProgressElement
	> {
	label?: string;
}
export const ProgressBar = ({ label, ...rest }: ProgressBarProps) => {
	return (
		<div className={styles.progress__bar}>
			{label && (
				<div className={styles.label__container}>
					<label>{label}</label>
					<label>{rest.value}%</label>
				</div>
			)}
			<progress className={`${styles.progress} ${rest.className}`} {...rest} />
		</div>
	);
};
