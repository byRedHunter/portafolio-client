import React, { useCallback, useRef, useState } from 'react'
import { useScrolling } from '../../../hooks/useScrolling'

import { Loading } from '../../components/Loading'
import { Video } from './Video'

export const Videos = () => {
	const [pageNumber, setPageNumber] = useState(1)

	const { data, error, hasMore, loading } = useScrolling('youtube', pageNumber)

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
				<section className='videos'>
					{data.map((video, index) => {
						if (data.length === index + 1) {
							return (
								<Video
									innerRef={lastElementRef}
									key={video._id}
									video={video}
								/>
							)
						} else {
							return <Video key={video._id} video={video} />
						}
					})}
				</section>
			)}

			{loading && <Loading />}

			{error && (
				<div className='text-error'>
					Error en el servidor, no se pueden cargar los videos.
				</div>
			)}
		</>
	)
}
