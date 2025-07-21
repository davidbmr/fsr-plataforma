import { Route, Routes } from "react-router";

import { ARDManagement } from "@/features/services/modules/pages/ARDManagement/ARDManagement";
import { Content } from "@/features/services/modules/pages/ARDManagement/steps/Content";

export const ARDManagementRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ARDManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
