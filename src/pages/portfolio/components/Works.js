import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useScrolling } from '../../../hooks/useScrolling'
import { useFilter } from '../../../store/useFilter'

import { Loading } from '../../components/Loading'
import { Work } from './Work'

export const Works = () => {
	const { itemFilter, changeFilter } = useFilter((state) => state)
	const [pageNumber, setPageNumber] = useState(1)

	const { data, error, hasMore, loading } = useScrolling(
		'portfolio',
		pageNumber
	)

	const observer = useRef()

	const lastElementRef = useCallback(
		(node) => {
			if (loading) return

			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((page) => page + 1)
				}
			})

			if (node) observer.current.observe(node)
		},
		[loading, hasMore]
	)

	const filteredData = useMemo(() => {
		const filtered = []
		if (itemFilter === 'Todos') return data

		data.filter((work) =>
			work.badges.forEach((badge) => {
				if (`${badge.title}`.toLowerCase().includes(itemFilter.toLowerCase()))
					return filtered.push(work)
			})
		)

		if (filtered.length > 0) {
			return filtered
		}

		return []
		// eslint-disable-next-line
	}, [itemFilter])

	useEffect(() => {
		if (loading) return

		changeFilter('Todos')
		// eslint-disable-next-line
	}, [loading])

	if (!loading && filteredData.length === 0) {
		return <p className='text-error'>No hay coincidencias en el filtro.</p>
	}

	return (
		<>
			{data.length > 0 && (
				<section className='works'>
					{filteredData.map((work, index) => {
						if (filteredData.length === index + 1) {
							return (
								<Work innerRef={lastElementRef} key={work._id} work={work} />
							)
						} else {
							return <Work key={work._id} work={work} />
						}
					})}
				</section>
			)}

			{loading && <Loading />}

			{error && (
				<div className='text-error'>
					Error en el servidor, no se pueden cargar los trabajos.
				</div>
			)}
		</>
	)
}
