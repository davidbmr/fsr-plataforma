import { Route, Routes } from "react-router";

import { RegularizationManagement } from "@/features/services/modules/pages/RegularizationManagement/RegularizationManagement";
import { Content } from "@/features/services/modules/pages/RegularizationManagement/steps/Content";

export const RegularizationManagementRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<RegularizationManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
