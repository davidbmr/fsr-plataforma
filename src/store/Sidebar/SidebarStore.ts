import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // Importa createJSONStorage
import type { SidebarStoreProps } from "./interfaces/SidebarInterface";

export const useSidebarStore = create<SidebarStoreProps>()(
	persist(
		(set, get) => ({
			state: true,
			changeState: () => {
				set({ state: !get().state });
			},
		}),
		{
			name: "sidebar-state",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
