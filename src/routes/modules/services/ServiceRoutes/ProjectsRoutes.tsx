import { Route, Routes } from "react-router";
import { Projects } from "@/features/services/modules/pages/Projects/Projects";
import { Content } from "@/features/services/modules/pages/Projects/steps/Content";

export const ProjectsRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Projects />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
