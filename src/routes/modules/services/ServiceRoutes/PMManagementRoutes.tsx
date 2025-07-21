import { Route, Routes } from "react-router";

import { PMManagement } from "@/features/services/modules/pages/PMManagement/PMManagement";
import { Content } from "@/features/services/modules/pages/PMManagement/steps/Content";

export const PMManagementRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PMManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
