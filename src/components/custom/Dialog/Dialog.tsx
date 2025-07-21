import styles from "./Dialog.module.css";
import { Dialog } from "primereact/dialog";

interface PrimeModalProps {
	modalStatus?: boolean;
	onHideModal: () => void;
	children?: React.ReactNode;
	header?: string;
	description?: string;
	width?: number | string;
}

export const PrimeModal: React.FC<PrimeModalProps> = ({
	modalStatus,
	onHideModal,
	children,
	header,
	description,
	width = 600,
}) => {
	return (
		<Dialog
			header={
				<div className={styles.header}>
					<h1>{header}</h1>
					<p>{description}</p>
				</div>
			}
			visible={modalStatus}
			modal
			draggable={false}
			style={{ width: `${width}px` }}
			onHide={onHideModal}
			dismissableMask={true}
			headerStyle={{
				padding: "15px",
				borderBottom: "1px solid #C9C9C9",
			}}
		>
			<div className={styles.children}>{children}</div>
		</Dialog>
	);
};
