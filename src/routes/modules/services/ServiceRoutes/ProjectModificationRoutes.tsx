import { Route, Routes } from "react-router";

import { ProjectModification } from "@/features/services/modules/pages/ProjectModification/ProjectModification";
import { Content } from "@/features/services/modules/pages/ProjectModification/steps/Content";

export const ProjectModificationRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ProjectModification />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
