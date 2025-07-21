import styles from "./ContentBox.module.css";
import type { LucideIconType } from "@/vite-env";

interface ContentBoxProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	Icon?: LucideIconType;
	description: string;
}

export const ContentBox = ({ title, Icon, description, ...rest }: ContentBoxProps) => {
	return (
		<div className={`${styles.content__box} ${rest.className}`} {...rest}>
			<div className={styles.title__container}>
				<div className={styles.title}>
					{Icon && <Icon color="#007C88" width={30} height={30} />}
					<h1>{title}</h1>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
			{rest.children}
		</div>
	);
};
