import React, { useEffect } from 'react'
import { useInterface } from '../../store/useInterface'

import './config.css'

import Theme from './svg/Theme'

const lightTheme = {
	'--color-light': '#fbfbfb',
	'--color-dark': '#101010',
	'--color-dark-50': 'rgba(16, 16, 16, 0.5)',
	'--color-primary': '#5f3899',
	'--color-primary-50': 'rgba(95, 56, 153, 0.5)',
	'--color-secondary': '#ff5200',
	'--color-bg': '#e6e7fa',
	'--color-bg-sidebar': '#efeffb',
}

const darkTheme = {
	'--color-light': '#0f0520',
	'--color-dark': '#fbfbfb',
	'--color-dark-50': 'rgba(251, 251, 251, 0.5)',
	'--color-primary': '#ff5200',
	'--color-primary-50': 'rgba(255, 81, 0, 0.5)',
	'--color-secondary': '#9f5eff',
	'--color-bg': '#080915',
	'--color-bg-sidebar': '#030307',
}

export const Config = () => {
	const { darkMode, toggleTheme } = useInterface((state) => state)

	useEffect(() => {
		const changeTheme = (theme) => {
			const styles = document.documentElement.style
			const customStyles = Object.keys(theme)

			for (const style of customStyles) {
				styles.setProperty(style, theme[style])
			}
		}

		darkMode ? changeTheme(lightTheme) : changeTheme(darkTheme)
	}, [darkMode])

	return (
		<div className='config'>
			<h3 className='config-title'>Configuraciones</h3>
			<div className='config-section'>
				<span>Tema</span>
				<div
					className={darkMode ? 'tema active' : 'tema'}
					data-text={darkMode ? 'DarkMode' : 'LightMode'}
					onClick={() => toggleTheme()}
				>
					<Theme />
				</div>
			</div>
		</div>
	)
}
