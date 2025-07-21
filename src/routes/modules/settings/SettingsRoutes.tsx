import { Routes, Route, Navigate } from "react-router";

// LAYOUT
import { Settings } from "@/routes/layout/SettingsLayout/Settings.layout";

// ROUTES
import { Users } from "@/features/Settings/Users/Users"; 
import { Customers } from "@/features/Settings/Customers/Customers"; 
import { CustomerManagement } from "@/features/Settings/Customers/CustomerManagement/CustomerManagement"; 

export const SettingsRoutes = () => {
	return (
		<Routes>
			<Route element={<Settings />}>
				<Route path="/users-management" element={<Users />} />
				<Route path="/customer-management" element={<Customers />} />
				<Route path="/customer-management/create" element={<CustomerManagement />} />
				<Route path="/customer-management/:id" element={<CustomerManagement />} />
				<Route path="/*" element={<Navigate to={"/settings/users-management"} />} />
			</Route>
		</Routes>
	);
};
