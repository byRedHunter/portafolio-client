import React from 'react'

export const Video = ({ video }) => {
	return (
		<article className='video'>
			<figure className='video-header'>
				<img src={video.image} alt={video.title} />
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
