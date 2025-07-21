import { Route, Routes } from "react-router";

// VIEWS
import { ProjectsManagement } from "@/features/services/modules/pages/ProjectsManagement/ProjectsManagement";
import { Content } from "@/features/services/modules/pages/ProjectsManagement/steps/Content";

export const ProjectsManagementRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ProjectsManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
