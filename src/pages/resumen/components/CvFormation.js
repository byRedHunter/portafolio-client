import React from 'react'

import Undc from '../../components/svg/Undc'
import Platzi from '../../components/svg/Platzi'
import Udemy from '../../components/svg/Udemy'
import Me from '../../components/svg/Contact.jsx'

export const CvFormation = () => {
	return (
		<div className='cv__experience cv__formation'>
			<h2 className='cv__title'>Formación Profesional</h2>

			<div className='formation__container'>
				<div className='formation'>
					<div className='formation__header'>
						<Undc />
						<h3>Universidad Nacional de Cañete</h3>
					</div>

					<div className='formation__body'>
						<p className='body__info'>
							Me encuentro estudiando la carrera de{' '}
							<span>Ingeniería de Sistemas</span>.
						</p>

						<div className='h4'>Mis logros</div>

						<ul className='logros'>
							<li>
								<span>✔</span> Fundamentos de programación
							</li>
							<li>
								<span>✔</span> Bases de la metodología SCRUM
							</li>
							<li>
								<span>✔</span> Bases de la metodología SCRUM
							</li>
						</ul>
					</div>
				</div>

				<div className='formation'>
					<div className='formation__header'>
						<Platzi />

						<Udemy />
						<h3>Platzi & Udemy</h3>
					</div>

					<div className='formation__body'>
						<p className='body__info'>
							Llevo el camino de <span>Frontend</span> y desarrollo{' '}
							<span>backend</span> con <span>JavaScript</span>.
						</p>

						<div className='h4'>Mis logros</div>

						<ul className='logros'>
							<li>
								<span>✔</span> DB relacional y no relacional
							</li>
							<li>
								<span>✔</span> JavaScript
							</li>
							<li>
								<span>✔</span> React
							</li>
							<li>
								<span>✔</span> Node con Express
							</li>
							<li>
								<span>✔</span> Git & GitHub
							</li>
							<li>
								<span>✔</span> Bases de Firebase
							</li>
						</ul>
					</div>
				</div>

				<div className='formation'>
					<div className='formation__header'>
						<Me />
						<h3>Autodidacta</h3>
					</div>

					<div className='formation__body'>
						<p className='body__info'>
							Me apasiona la tecnología y me considero una persona autodidacta.
						</p>

						<div className='h4'>Mis logros</div>

						<ul className='logros'>
							<li>
								<span>✔</span> HTML5
							</li>
							<li>
								<span>✔</span> CSS3
							</li>
							<li>
								<span>✔</span> JavaScript
							</li>
							<li>
								<span>✔</span> Bootstrap
							</li>
							<li>
								<span>✔</span> Responsive Design
							</li>
							<li>
								<span>✔</span> Mobile First
							</li>
							<li>
								<span>✔</span> SASS
							</li>
							<li>
								<span>✔</span> PHP
							</li>
							<li>
								<span>✔</span> Fundamentos de Node y React
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
