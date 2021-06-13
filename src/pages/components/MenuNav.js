import React from 'react'
import { Link } from 'react-router-dom'

import About from './svg/About'
import Contact from './svg/Contact'
import YouTube from './svg/YouTube'
import Resumen from './svg/Resumen'
import Portfolio from './svg/Portfolio'

export const MenuNav = () => {
	return (
		<nav className='nav'>
			<div className='nav-item'>
				<Link to='/'>
					<About />
					Sobre Mi
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/'>
					<Resumen />
					Resumen
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/'>
					<Portfolio />
					Portafolio
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/'>
					<YouTube />
					YouTube
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/'>
					<Contact />
					Contacto
				</Link>
			</div>
		</nav>
	)
}
