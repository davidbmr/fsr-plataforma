import { Route, Routes } from "react-router";

// VIEWS
import { DraftsManagement } from "@/features/services/modules/pages/DraftsManagement/DraftsManagement";
import { Content } from "@/features/services/modules/pages/DraftsManagement/steps/Content";

export const DraftsManagementRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<DraftsManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
