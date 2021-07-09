import React from 'react'
import { useFilter } from '../../../store/useFilter'
import { changeItemFilter } from '../../../utils/portfolio'

const labels = [
	{
		id: 1,
		label: 'Todos',
	},
	{
		id: 2,
		label: 'JavaScript',
	},
	{
		id: 3,
		label: 'React',
	},
	{
		id: 4,
		label: 'Angular',
	},
	{
		id: 5,
		label: 'Node',
	},
	{
		id: 6,
		label: 'PHP',
	},
	{
		id: 7,
		label: 'HTML',
	},
	{
		id: 8,
		label: 'CSS',
	},
]

export const Filtro = () => {
	const { changeFilter } = useFilter((state) => state)

	return (
		<ul className='filter'>
			{labels.map((item) => (
				<li
					key={item.id}
					className={
						item.label === 'Todos' ? 'filter-item active' : 'filter-item'
					}
					onClick={(e) => {
						changeItemFilter(e)
						changeFilter(e.target.textContent)
					}}
				>
					{item.label}
				</li>
			))}
		</ul>
	)
}
