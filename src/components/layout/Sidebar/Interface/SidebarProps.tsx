import type { ReactNode } from "react";

export interface SidebarProps {
	routes: {
		title: string;
		content_title: string;
		content_description: string;
		icon: ReactNode;
		href: string;
	}[];
}
