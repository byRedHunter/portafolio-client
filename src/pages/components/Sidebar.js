import React from 'react'
import { Link } from 'react-router-dom'

import Perfil from '../../images/perfil.png'
import './sidebar.css'

import { useInterface } from '../../store/useInterface'

import { Social } from './Social'
import { MenuNav } from './MenuNav'
import { Config } from './Config'

export const Sidebar = () => {
	const { sidebarActive } = useInterface((state) => state)
	return (
		<header className={sidebarActive ? 'header active' : 'header'}>
			<Link to='/resumen' className='header-cv'>
				<span>Ver Resumen</span>
			</Link>

			<div className='header-info'>
				<figure className='header-info-profile'>
					<img src={Perfil} alt='Foto de perfil de Jhonny Quispe Navarro' />
				</figure>

				<h1 className='header-info-title'>Jhonny Quispe Navarro</h1>

				<p className='header-info-desc'>
					Hola, soy Frontend Developer, te doy la bienvenida a mi sitio web
					personal, echa un vistazo a mis proyectos, espero lo disfrutes.
				</p>
			</div>

			<Social />

			<MenuNav />

			<Config />
		</header>
	)
}
