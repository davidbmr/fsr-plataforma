import { Route, Routes } from "react-router";

// Views
import { Services } from "@/features/services/Services";

// Routes
import { DraftsRoutes } from "./ServiceRoutes/DraftsRoutes";
import { DraftsManagementRoutes } from "./ServiceRoutes/DraftsManagementRoutes";
import { ProjectsRoutes } from "./ServiceRoutes/ProjectsRoutes";
import { ProjectsManagementRoutes } from "./ServiceRoutes/ProjectsManagementRoutes";
import { ComformityOfWorkRoutes } from "./ServiceRoutes/ConformityOfWorkRoutes";
import { COWManagementRoutes } from "./ServiceRoutes/COWManagementRoutes";
import { ProjectModificationRoutes } from "./ServiceRoutes/ProjectModificationRoutes";
import { PMManagementRoutes } from "./ServiceRoutes/PMManagementRoutes";
import { ARDRoutes } from "./ServiceRoutes/ARDRoutes";
import { ARDManagementRoutes } from "./ServiceRoutes/ARDManagementRoutes";
import { DemolitionRoutes } from "./ServiceRoutes/DemolitionRoutes";
import { DemolitionRoutesManagement } from "./ServiceRoutes/DemolitionManagementRoutes";
import { AnnexHRoutes } from "./ServiceRoutes/AnnexHRoutes";
import { RegularizationRoutes } from "./ServiceRoutes/RegularizationRoutes";
import { RegularizationManagementRoutes } from "./ServiceRoutes/RegularizationManagementRoutes";

export const ServiceRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Services />} />
			<Route path="/drafts/*" element={<DraftsRoutes />} />
			<Route path="/drafts-management/*" element={<DraftsManagementRoutes />} />
			<Route path="/projects/*" element={<ProjectsRoutes />} />
			<Route path="/projects-management/*" element={<ProjectsManagementRoutes />} />
			<Route path="/conformity-of-work/*" element={<ComformityOfWorkRoutes />} />
			<Route path="/conformity-of-work-management/*" element={<COWManagementRoutes />} />
			<Route path="/project-modification/*" element={<ProjectModificationRoutes />} />
			<Route path="/project-modification-management/*" element={<PMManagementRoutes />} />
			<Route path="/ampliation-remodelation-demolition/*" element={<ARDRoutes />} />
			<Route
				path="/ampliation-remodelation-demolition/management/*"
				element={<ARDManagementRoutes />}
			/>
			<Route path="/demolition/*" element={<DemolitionRoutes />} />
			<Route path="/demolition-management/*" element={<DemolitionRoutesManagement />} />
			<Route path="/annex-h-management/*" element={<AnnexHRoutes />} />
			<Route path="/regularization/*" element={<RegularizationRoutes />} />
			<Route path="/regularization-management/*" element={<RegularizationManagementRoutes />} />
		</Routes>
	);
};
