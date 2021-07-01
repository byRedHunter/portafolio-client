import axios from 'axios'
import { useEffect, useState } from 'react'

export const useScrolling = (url, pageNumber) => {
	console.log(`${process.env.REACT_APP_BASE_URL}${url}`)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [data, setData] = useState([])
	const [hasMore, setHasMore] = useState(false)

	useEffect(() => {
		setLoading(true)
		setError(false)

		axios({
			method: 'GET',
			url: `${process.env.REACT_APP_BASE_URL}${url}`,
			params: { page: pageNumber },
		})
			.then((res) => {
				setData([...data, ...res.data.docs])
				setHasMore(res.data.hasNextPage)
				setLoading(false)
			})
			.catch((e) => {
				setLoading(false)
				setError(true)
			})
		// eslint-disable-next-line
	}, [pageNumber])

	return { loading, error, data, hasMore }
}
