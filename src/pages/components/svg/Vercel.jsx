import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			width={40}
			height={40}
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<circle cx={20} cy={20} r={20} fill='#000' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 6.508L32.7 28.518H7.302L20 6.509z'
				fill='#F8F8F8'
			/>
		</svg>
	)
}

export default SvgComponent
