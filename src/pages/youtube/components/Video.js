import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Video = ({ video }) => {
	return (
		<article className='video'>
			<figure className='video-header'>
				<LazyLoadImage
					effect='blur'
					src={video.image}
					alt={video.title}
					height='100%'
					width='100%'
					style={{ objectFit: 'cover' }}
					placeholderSrc={process.env.PUBLIC_URL + '/placeholder.svg'}
				/>
			</figure>
			<div className='video-content'>
				<h4 className='video-title'>{video.title}</h4>
				<p className='video-desc'>{video.desc}</p>
			</div>
			<div className='video-link'>
				<a href={video.link} className='link' target='_blank' rel='noreferrer'>
					Ver Video
				</a>
			</div>
		</article>
	)
}
