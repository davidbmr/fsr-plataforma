import styles from "./SidebarButton.module.css";
import type { SidebarStoreProps } from "@/store/Sidebar/interfaces/SidebarInterface";
import { Button } from "@/components/custom/Button/Button";
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from "lucide-react";

interface SidebarButtonProps extends SidebarStoreProps {
	className?: string;
}

export const SidebarButton = ({ className, changeState, state }: SidebarButtonProps) => {
	return (
		<div className={`${styles.button__container} ${className}`} data-state={state}>
			<Button
				onClick={changeState}
				className={styles.button}
				children={state ? <ArrowLeftFromLineIcon /> : <ArrowRightFromLineIcon />}
			/>
		</div>
	);
};
