import styles from "./Sidebar.module.css";
import logo_1 from "@/assets/logo/logo_1.svg";
import logo_2 from "@/assets/logo/logo_2.svg";
import { Link, useLocation } from "react-router";
// import { useAuthStore } from "@/store/Auth/AuthStore";
import type { SidebarProps } from "./Interface/SidebarProps";
import { useSidebarStore } from "@/store/Sidebar/SidebarStore";
import { Button } from "@/components/custom/Button/Button";
import { SidebarButton } from "../SidebarButton/SidebarButton";
import { LogOut } from "lucide-react";

export const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
	// const { logout } = useAuthStore();
	const location = useLocation();
	const logout = () => {};
	const { state, changeState } = useSidebarStore();
	const onLogOut = () => {
		logout();
		useSidebarStore.persist.clearStorage();
	};
	return (
		<div className={styles.sidebar} data-state={state}>
			<div className={styles.sidebar__title}>
				<div data-state={state} className={styles.logo}>
					<div className={styles.logo__container} data-state={state}>
						<img
							className={styles.logo__img}
							data-state={state}
							src={state ? logo_2 : logo_1}
							alt="fsr - revisores urbanos"
							onClick={changeState}
						/>
					</div>
					<SidebarButton
						className={styles.button__container}
						changeState={changeState}
						state={state}
					/>
				</div>
			</div>
			<div className={styles.routes} data-state={state}>
				<div className={styles.route_content} data-state={state}>
					{routes.map((routes, index) => (
						<div key={index} className={styles.link__content}>
							<Link
								key={index}
								className={styles.link}
								to={routes.href}
								replace
								data-state={state}
								data-isActive={
									routes.href === location.pathname || location.pathname.startsWith(routes.href)
								}
							>
								<label data-state={state} data-link={"icon"} title={routes.title}>
									{routes.icon}
								</label>
								{state ? (
									<label data-state={state} data-link={"text"}>
										{routes.title}
									</label>
								) : null}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className={styles.logout__container}>
				<Button
					onClick={onLogOut}
					data-state={state}
					className={styles.logout__btn}
					children={
						<>
							<label data-state={state} data-link={"icon"}>
								<LogOut />
							</label>
							{state ? (
								<label data-state={state} data-link={"icon"}>
									Cerrar Sesión
								</label>
							) : null}
						</>
					}
				/>
			</div>
		</div>
	);
};
