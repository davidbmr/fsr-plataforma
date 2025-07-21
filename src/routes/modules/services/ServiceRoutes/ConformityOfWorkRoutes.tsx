import { ComformityOfWork } from "@/features/services/modules/pages/ConformityOfWork/ComformityOfWork";
import { Content } from "@/features/services/modules/pages/ConformityOfWork/steps/Content";
import { Route, Routes } from "react-router";

export const ComformityOfWorkRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ComformityOfWork />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
