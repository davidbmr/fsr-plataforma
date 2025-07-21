import { Route, Routes } from "react-router";

import { ARD } from "@/features/services/modules/pages/ARD/ARD";
import { Content } from "@/features/services/modules/pages/ARD/steps/Content";

export const ARDRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ARD />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
