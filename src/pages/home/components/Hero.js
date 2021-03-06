import React from 'react'
import { Link } from 'react-router-dom'

import Code from '../../components/svg/Code'
import Tech from '../../components/svg/Tech'
import Favicon from '../../components/svg/Favicon'

import Resumen from '../../components/svg/Resumen'
import Send from '../../components/svg/Send'

export const Hero = () => {
	return (
		<section className='hero'>
			<h1 className='hero-title'>Jhonny Quispe Navarro</h1>
			<h4 className='hero-badge text-primary'>Frontend Developer</h4>

			<p className='hero-desc'>
				Estudié Ingeniería de Sistemas, me especializo el desarrollo{' '}
				<span className='text-secondary text-bold'>Frontend</span> y{' '}
				<span className='text-secondary text-bold'>Backend</span> para
				aplicaciones web. Me gusta estar en constante aprendizaje y compartir lo
				aprendido, es por ello que suelo compartir contenido en{' '}
				<span className='text-secondary text-bold'>YouTube</span>. A futuro
				quiero aprender a desarrollar{' '}
				<span className='text-secondary text-bold'>aplicaciones móvil</span> y{' '}
				<span className='text-secondary text-bold'>Python</span> que me llama
				mucho la atención.
			</p>

			<div className='hero-desc'>
				<span className='text-primary text-bold'>
					¿Quieres saber cómo puedo ayudar en tus proyectos?
				</span>{' '}
				Puedes ver mi{' '}
				<span className='text-secondary text-bold'>portafolio</span> de
				proyectos o mi{' '}
				<span className='text-secondary text-bold'>resumen en línea</span>.
			</div>

			<div className='hero-links'>
				<Link to='/portfolio' className='button button-primary'>
					<Send /> Ver Portafolio
				</Link>

				<Link to='/resumen' className='button'>
					<Resumen fill={'#fbfbfb'} /> Ver Resumen
				</Link>
			</div>

			<Code className='svg svg-code' />
			<Favicon className='svg svg-favicon' />
			<Tech className='svg svg-tech' />
		</section>
	)
}
