import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'

export const useInterface = create(
	devtools(
		combine({ sidebarActive: false, darkMode: false }, (set) => ({
			toggleSidebar: () =>
				set((state) => ({ ...state, sidebarActive: !state.sidebarActive })),

			closeSidebar: () => set((state) => ({ ...state, sidebarActive: false })),

			toggleTheme: () =>
				set((state) => ({ ...state, darkMode: !state.darkMode })),
		}))
	)
)
