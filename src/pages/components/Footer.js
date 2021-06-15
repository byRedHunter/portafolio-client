import React from 'react'

import './footer.css'

export const Footer = () => {
	const date = new Date().getFullYear()

	return (
		<footer className='footer'>
			<p className='text-center footer-content'>
				&copy; {date}, hecho con 💚 por{' '}
				<span className='text-bold'>Jhonny Quispe Navarro</span> (@byRedHunter)
			</p>
		</footer>
	)
}
