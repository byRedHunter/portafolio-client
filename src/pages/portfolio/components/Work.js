import React from 'react'

import Send from '../../components/svg/Send'
import GitHub from '../../components/svg/GitHub'

export const Work = ({ work }) => {
	return (
		<article className='work'>
			<figure className='work-figure'>
				<img src={work.image} alt={work.title} />
			</figure>

			<div className='work-header'>
				<h4 className='work-title'>{work.title}</h4>
				<ul className='work-badges'>
					{work.badges.map((badge) => (
						<li key={badge._id} className={`badge badge-${badge.name}`}>
							{badge.name.toUpperCase()}
						</li>
					))}
				</ul>
			</div>

			<div className='work-content'>
				<p className='work-desc'>{work.desc}</p>
				<div className='work-links'>
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
