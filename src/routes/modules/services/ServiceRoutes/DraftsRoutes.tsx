import { Route, Routes } from "react-router";
import { Drafts } from "@/features/services/modules/pages/Drafts/Drafts";
import { Content } from "@/features/services/modules/pages/Drafts/steps/Content";

export const DraftsRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Drafts />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
