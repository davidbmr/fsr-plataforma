import styles from "./Layout.module.css";
import { Outlet, useLocation } from "react-router";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { Header } from "@/components/layout/Header/Header";
import { route_data } from "@/routes/routes_data/routes_data";
import { header_data } from "@/routes/routes_data/header_data";

export const Layout = () => {
	const location = useLocation();
	const current_content = header_data?.find((item) => item.href === location.pathname);
	return (
		<>
			<title>{current_content?.content_title || "Revisores Urbanos"}</title>
			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<Sidebar routes={route_data} />
				</div>
				<div className={styles.header}>
					<Header route={current_content} />
				</div>
				<div className={styles.content}>
					<Outlet />
				</div>
			</div>
		</>
	);
};
