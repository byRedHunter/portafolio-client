import React from 'react'
import { Link } from 'react-router-dom'

export const CvExperience = () => {
	return (
		<div className='cv__experience'>
			<h2 className='cv__title'>Experiencia Profesional</h2>

			<div className='cv__experience--section'>
				<h4>
					Freelance <span className='date'>01/11/20 - 31/12/20</span>
				</h4>

				<p>
					He desarrollado un mini sistema para el control de stock con el stack{' '}
					<span>MERN</span>
				</p>

				<p>
					He desarrollado un sistemas para el control de archivos con{' '}
					<span>PHP, JavaScript, HTML y CSS</span>
				</p>
			</div>

			<div className='cv__experience--message'>
				<p>
					De momento mis empleos han sido pequeños, con la modalidad freelance,
					desarrollando paginas web o haciendo cosas pequeñas, pero puedes ver
					algunos de mis proyectos en mi portafolio con el siguiente lin:{' '}
					<Link to='/portfolio' className='text-bold text-link'>
						Ver Portafolio
					</Link>
				</p>
			</div>
		</div>
	)
}
