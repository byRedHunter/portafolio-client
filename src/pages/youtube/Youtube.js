import React from 'react'

import './youtube.css'

import { Videos } from './components/Videos'

const Youtube = () => {
	return (
		<section className='youtube'>
			<h2 className='title'>
				<span>{'['}</span> YouTube <span>{'}'}</span>
			</h2>

			<p className='section-description'>
				Me gusta compartir lo que aprendo, es por eso que inicie un canal en
				YouTube donde comparto contenido que te ayudara a aprender practicando
				que es justamente el nombre del canal{' '}
				<span className='text-primary text-bold'>"AprendePracticando"</span>. A
				continuación te presento algunos de mis videos y te dejo este{' '}
				<a
					href='https://www.youtube.com/channel/UCGrtPiO6Ijz_1aN7tXfC-MQ'
					rel='noreferrer'
					target='_blank'
					className='text-primary text-link text-bold'
				>
					enlace
				</a>{' '}
				para que puedas visitar el canal.
			</p>

			<Videos />
		</section>
	)
}

export default Youtube
