import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import Send from '../../components/svg/Send'
import GitHub from '../../components/svg/GitHub'

export const Work = ({ work, innerRef }) => {
	return (
		<article className='work' ref={innerRef ? innerRef : null}>
			<div className='work-image'>
				<figure className='work-figure'>
					<LazyLoadImage
						effect='blur'
						src={work.image}
						alt={work.title}
						height='100%'
						width='100%'
						style={{ objectFit: 'cover' }}
						placeholderSrc={process.env.PUBLIC_URL + '/placeholder.svg'}
					/>
				</figure>
			</div>

			<div className='work-content'>
				<h3>{work.title}</h3>

				<ul className='work-badges'>
					{work.badges.map((badge) => (
						<li
							key={badge._id}
							className={`badge badge-${badge.title.toLowerCase()}`}
						>
							{badge.title.toUpperCase()}
						</li>
					))}
				</ul>

				<p>{work.desc}</p>

				<div className='work-actions'>
					<a
						href={work.preview}
						className='button'
						target='_blank'
						rel='noreferrer'
					>
						<Send /> Preview
					</a>
					<a
						href={work.repository}
						className='button button-primary'
						target='_blank'
						rel='noreferrer'
					>
						<GitHub /> Repositorio
					</a>
				</div>
			</div>
		</article>
	)
}
