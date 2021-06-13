import React from 'react'
import { Link } from 'react-router-dom'

import GitHub from './svg/GitHub'
import LinkedIn from './svg/LinkedIn'
import Twitter from './svg/Twitter'
import Instagram from './svg/Instagram'
import Email from './svg/Email'

export const Social = () => {
	return (
		<ul className='social'>
			<li className='social-item'>
				<Link to='https://github.com/byRedHunter' target='_blank'>
					<GitHub />
				</Link>
			</li>
			<li className='social-item'>
				<Link
					to='https://www.linkedin.com/in/jhonny-quispe-navarro/'
					target='_blank'
				>
					<LinkedIn />
				</Link>
			</li>
			<li className='social-item'>
				<Link
					to='https://mail.google.com/mail/?view=cm&fs=1&to=jhonny.quispejl@gmail.com'
					target='_blank'
				>
					<Email />
				</Link>
			</li>
			<li className='social-item'>
				<Link to='https://twitter.com/byRedHunter' target='_blank'>
					<Twitter />
				</Link>
			</li>
			<li className='social-item'>
				<Link to='https://www.instagram.com/byreddhunter/' target='_blank'>
					<Instagram />
				</Link>
			</li>
		</ul>
	)
}
