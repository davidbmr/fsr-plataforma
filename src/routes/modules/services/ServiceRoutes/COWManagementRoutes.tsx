import { Route, Routes } from "react-router";

import { COWManagement } from "@/features/services/modules/pages/COWManagement/COWManagement";
import { Content } from "@/features/services/modules/pages/COWManagement/steps/Content";

export const COWManagementRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<COWManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
