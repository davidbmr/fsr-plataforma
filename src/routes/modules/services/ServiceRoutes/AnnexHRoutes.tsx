import { Route, Routes } from "react-router";

import { AnnexH } from "@/features/services/modules/pages/AnnexH/AnnexH";
import { Content } from "@/features/services/modules/pages/AnnexH/steps/Content";

export const AnnexHRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<AnnexH />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
