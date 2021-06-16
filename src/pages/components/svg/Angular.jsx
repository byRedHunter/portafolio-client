import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			className='prefix__svg-inline--fa prefix__fa-angular prefix__fa-w-14 prefix__mr-2'
			aria-hidden='true'
			data-prefix='fab'
			data-icon='angular'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 448 512'
			height='40px'
			{...props}
		>
			<path
				fill='#CA3327'
				d='M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z'
			/>
		</svg>
	)
}

export default SvgComponent
