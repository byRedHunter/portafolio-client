import React, { useCallback, useRef, useState } from 'react'
import { useScrolling } from '../../../hooks/useScrolling'

import { Loading } from '../../components/Loading'
import { Work } from './Work'

export const Works = () => {
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

	return (
		<>
			{data.length > 0 && (
				<section className='works'>
					{data.map((work, index) => {
						if (data.length === index + 1) {
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
