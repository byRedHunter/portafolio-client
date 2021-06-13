import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'

export const useInterface = create(
	devtools(
		combine({ sidebarActive: false, darkMode: true }, (set) => ({
			toggleSidebar: () =>
				set((state) => ({ ...state, sidebarActive: !state.sidebarActive })),

			toggleTheme: () =>
				set((state) => ({ ...state, darkMode: !state.darkMode })),
		}))
	)
)
