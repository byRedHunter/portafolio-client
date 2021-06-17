import React from 'react'

import { Video } from './Video'

const listVideos = [
	{
		id: 1,
		image: 'https://jhonnyquispe.netlify.app/assets/images/slider-firebase.png',
		title: 'React Gallery',
		desc: 'Aprende como realizar una galleria con react, utilizando firebase y custom hooks.',
		link: 'https://www.youtube.com/watch?v=Vg3-Vz8myDo',
	},
	{
		id: 2,
		image:
			'https://cdn.pixabay.com/photo/2017/01/20/15/12/oranges-1995079__340.jpg',
		title: 'Dark/Lith Mode con javascript',
		desc: 'Aprende como realizar una galleria con react, utilizando firebase y custom hooks.',
		link: 'https://www.youtube.com/watch?v=7aNAmLP38CY',
	},
]

export const Videos = () => {
	return (
		<section className='videos'>
			{listVideos.map((video) => (
				<Video key={video.id} video={video} />
			))}
		</section>
	)
}
