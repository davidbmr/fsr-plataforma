import { Route, Routes } from "react-router";

import { Regularization } from "@/features/services/modules/pages/Regularization/Regularization";
import { Content } from "@/features/services/modules/pages/Regularization/steps/Content";

export const RegularizationRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Regularization />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
