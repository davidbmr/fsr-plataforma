import { Routes, Route, Navigate } from "react-router";

//LAYOUTS
import { Layout } from "./layout/MainLayout/Layout";

//VIEWS
import { Login } from "../features/Login/Login";

//SUBROUTES
import { Dashboard } from "@/features/Dashboard/Dashboard";
import { ServiceRoutes } from "./modules/services/ServiceRoutes";
import { SettingsRoutes } from "./modules/settings/SettingsRoutes";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Layout />}>
				<Route index path="dashboard/" element={<Dashboard />} />
				<Route path="service/*" element={<ServiceRoutes />} />
				<Route path="settings/*" element={<SettingsRoutes />} />
			</Route>
			<Route path="/*" element={<Navigate to={"/dashboard"} />} />
		</Routes>
	);
};
