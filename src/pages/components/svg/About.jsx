import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			{...props}
		>
			<g clipPath='url(#prefix__clip0)'>
				<path
					d='M15 15c1.598 0 3.16-.44 4.487-1.264 1.329-.824 2.364-1.995 2.975-3.366a7.004 7.004 0 00.46-4.333c-.312-1.455-1.081-2.791-2.21-3.84A8.286 8.286 0 0016.575.144a8.656 8.656 0 00-4.667.427c-1.476.568-2.737 1.529-3.625 2.762A7.125 7.125 0 006.924 7.5c0 1.99.85 3.897 2.365 5.303C10.803 14.21 12.858 15 15 15zm0 2.143c-5.006 0-15 2.871-15 8.571V30h30v-4.286c0-5.7-9.994-8.571-15-8.571z'
					fill='#ea5455'
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
