import React from 'react'
import { Link } from 'react-router-dom'

export const Technologies = () => {
	return (
		<section className='technologies'>
			<h2 className='title'>
				<span>{'['}</span> Mis Herramientas <span>{'}'}</span>
			</h2>

			<p className='section-description'>
				Me encuentro en constante aprendizaje, me considero una persona
				autodidacta y me gusta mucho desarrollar aplicaciones. A continuación
				podras apreciar una lista de las principales habilidades técnicas y
				tecnologías que utilizo. ¿Quieres saber más sobre mi experiencia? Puedes
				consultar mi{' '}
				<Link to='/resumen' className='text-secondary text-bold text-link'>
					resumen en línea
				</Link>{' '}
				o mi{' '}
				<Link to='/portfolio' className='text-secondary text-bold text-link'>
					portafolio de proyectos
				</Link>
				.
			</p>
		</section>
	)
}
