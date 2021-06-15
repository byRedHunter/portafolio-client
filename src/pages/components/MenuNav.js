import React from 'react'
import { Link } from 'react-router-dom'

import './menuNav.css'

import About from './svg/About'
import Contact from './svg/Contact'
import YouTube from './svg/YouTube'
import Resumen from './svg/Resumen'
import Portfolio from './svg/Portfolio'
import { useInterface } from '../../store/useInterface'

export const MenuNav = () => {
	const { darkMode } = useInterface((state) => state)

	return (
		<nav className='nav'>
			<div className='nav-item'>
				<Link to='/' className='item-center'>
					<About fill={darkMode ? '#ff5200' : '#9f5eff'} />
					Sobre Mi
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/resumen' className='item-center'>
					<Resumen fill={darkMode ? '#ff5200' : '#9f5eff'} />
					Resumen
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/portfolio' className='item-center'>
					<Portfolio fill={darkMode ? '#ff5200' : '#9f5eff'} />
					Portafolio
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/youtube' className='item-center'>
					<YouTube fill={darkMode ? '#ff5200' : '#9f5eff'} />
					YouTube
				</Link>
			</div>
			<div className='nav-item'>
				<Link to='/contact' className='item-center'>
					<Contact fill={darkMode ? '#ff5200' : '#9f5eff'} />
					Contacto
				</Link>
			</div>
		</nav>
	)
}
