import * as React from 'react'

function SvgComponent({ fill = '#ff5200' }) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#prefix__clip0)'>
				<path
					d='M15 16.523a1.523 1.523 0 100-3.046 1.523 1.523 0 000 3.046zM20.273 16.523a1.523 1.523 0 100-3.046 1.523 1.523 0 000 3.046zM9.727 16.523a1.523 1.523 0 100-3.046 1.523 1.523 0 000 3.046z'
					fill={fill}
				/>
				<path
					d='M9.375 21.563L1.875 15l7.5-6.563m11.25 13.126l7.5-6.563-7.5-6.563'
					stroke={fill}
					strokeWidth={4}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='prefix__clip0'>
					<path fill='#fff' d='M0 0h30v30H0z' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default SvgComponent
