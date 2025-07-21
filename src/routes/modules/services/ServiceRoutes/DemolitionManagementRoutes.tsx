import { Route, Routes } from "react-router";

import { DemolitionManagement } from "@/features/services/modules/pages/DemolitionManagement/DemolitionManagement";
import { Content } from "@/features/services/modules/pages/DemolitionManagement/steps/Content";

export const DemolitionRoutesManagement = () => {
	return (
		<Routes>
			<Route path="/" element={<DemolitionManagement />} />
			<Route path="/create" element={<Content />} />
			<Route path="/:id" element={<Content />} />
		</Routes>
	);
};
