import React from 'react'

import './contact.css'

import { Social } from '../components/Social'
import { Footer } from '../components/Footer'

export const Contact = () => {
	return (
		<>
			<section className='contact'>
				<h2 className='title'>
					<span>{'['}</span> Contacto <span>{'}'}</span>
				</h2>

				<p className='section-description'>
					¿Te gustaría hablar conmigo o quieres que colabore en tus proyectos?
					Puedes contactarme a través de estos medios, estaré encantado de
					hablar contigo.
				</p>

				<Social />

				<div className='contact-info'>
					<div className='contact-info-content'>
						<h4 className='text-bold'>¿De dónde soy?</h4>
						<p>
							Un saludo desde{' '}
							<span className='text-bold text-secondary'>Perú</span>, pues sí,
							soy <span className='text-bold text-secondary'>peruano</span> de
							corazón.
						</p>
					</div>

					<div className='contact-info-content'>
						<h4 className='text-bold'>¿Dónde vivo?</h4>
						<p>
							Actualmente vivo en
							<span className='text-bold text-secondary'>
								{' '}
								San Vicente de Cañete,{' '}
							</span>
							Lima - Perú.
						</p>
					</div>

					<div className='contact-info-content'>
						<h4 className='text-bold'>¿Me pueden llamar o escribir?</h4>
						<p className='phone-number'>Por supuesto, este es mi número</p>
					</div>

					<div className='contact-info-content'>
						<h4 className='text-bold'>Mis planes a futuro</h4>
						<p>
							Trabajar en una empresa de tecnología y seguir compartiendo
							contenido en YouTube.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}
