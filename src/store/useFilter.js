import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'

export const useFilter = create(
	devtools(
		combine({ itemFilter: 'JavaScript' }, (set) => ({
			changeFilter: (newItem) =>
				set((state) => ({ ...state, itemFilter: newItem })),
		}))
	)
)
