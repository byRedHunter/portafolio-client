import React from 'react'

import './social.css'

import GitHub from './svg/GitHub'
import LinkedIn from './svg/LinkedIn'
import Twitter from './svg/Twitter'
import Instagram from './svg/Instagram'
import Email from './svg/Email'

export const Social = () => {
	return (
		<ul className='social'>
			<li className='social-item'>
				<a
					href='https://github.com/byRedHunter'
					target='_blank'
					className='item-center'
					rel='noreferrer'
				>
					<GitHub />
				</a>
			</li>
			<li className='social-item'>
				<a
					href='https://www.linkedin.com/in/jhonny-quispe-navarro/'
					target='_blank'
					className='item-center'
					rel='noreferrer'
				>
					<LinkedIn />
				</a>
			</li>
			<li className='social-item'>
				<a
					href='https://mail.google.com/mail/?view=cm&fs=1&to=jhonny.quispejl@gmail.com'
					target='_blank'
					className='item-center'
					rel='noreferrer'
				>
					<Email />
				</a>
			</li>
			<li className='social-item'>
				<a
					href='https://twitter.com/byRedHunter'
					target='_blank'
					className='item-center'
					rel='noreferrer'
				>
					<Twitter />
				</a>
			</li>
			<li className='social-item'>
				<a
					href='https://www.instagram.com/byreddhunter/'
					target='_blank'
					className='item-center'
					rel='noreferrer'
				>
					<Instagram />
				</a>
			</li>
		</ul>
	)
}
