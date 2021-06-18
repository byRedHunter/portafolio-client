import React from 'react'

import './portfolio.css'

import { Filtro } from './components/Filtro'
import { Works } from './components/Works'

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<h2 className='title'>
				<span>{'['}</span> Portafolio <span>{'}'}</span>
			</h2>

			<p className='section-description'>
				Bienvenido a mi portafolio, estos son algunos de mis trabajos más
				resaltantes, espero disfrutes de ellos. Si quieres ver todos mis
				trabajos te invito visites mi repositorio de{' '}
				<a
					href='https://github.com/byRedHunter'
					rel='noreferrer'
					target='_blank'
					className='text-primary text-link text-bold'
				>
					GitHub
				</a>
				.
			</p>

			<Filtro />

			<Works />

			<div className='youtube-action'>
				<button className='button button-primary button-youtube'>
					Ver más
				</button>
			</div>
		</section>
	)
}

export default Portfolio
