import { Route, Routes } from "react-router";

import { Demolition } from "@/features/services/modules/pages/Demolition/Demolition";
import { Content } from "@/features/services/modules/pages/Demolition/steps/Content";

export const DemolitionRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Demolition />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
