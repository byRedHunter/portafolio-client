import React from 'react'

import Perfil from '../../../images/perfil.png'

import Phone from '../../components/svg/Phone'
import Email from '../../components/svg/Email'
import Home from '../../components/svg/Home'
import Url from '../../components/svg/Url'

export const CvHeader = () => {
	return (
		<div className='cv__header'>
			<div className='cv__header--content'>
				<h1>Frontend Developer</h1>
				<p>
					Soy un Frontend Developer, me gusta desarrollar aplicaciones
					adaptables a todo tipo de dispositivos, también me apasiona y tengo
					conocimientos en <span>backend</span> y <span>bases de datos</span>.
				</p>
			</div>

			<div className='cv__header--info'>
				<div className='info__header'>
					<figure className='info__header--perfil'>
						<img src={Perfil} alt='Jhonny Quispe Navarro' />
					</figure>

					<div className='info__header--name'>
						Jhonny Lincol <br /> <span>Quispe Navarro</span>
					</div>
				</div>

				<div className='info__content'>
					<div className='info__content--item'>
						<Phone />
						+51 995 807 872
					</div>

					<a
						href='https://mail.google.com/mail/?view=cm&fs=1&to=jhonny.quispejl@gmail.com'
						target='_blank'
						rel='noreferrer'
						className='info__content--item'
					>
						<Email fill='#000' /> jhonny.quispejl@gmail.com
					</a>

					<div className='info__content--item'>
						<Home />
						San Vicente de Cañete Lima - Perú
					</div>

					<a
						href='https://byredhunter.netlify.app/'
						target='_blank'
						rel='noreferrer'
						className='info__content--item'
					>
						<Url /> https://byredhunter.netlify.app/
					</a>
				</div>
			</div>
		</div>
	)
}
