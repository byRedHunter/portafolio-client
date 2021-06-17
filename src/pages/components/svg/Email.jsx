import * as React from 'react'

function SvgComponent({ fill = '#f9f9f9' }) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M27.188 4.688H2.813a.937.937 0 00-.938.937v18.75a.937.937 0 00.938.938h24.375a.938.938 0 00.937-.938V5.625a.938.938 0 00-.938-.938zm-11.613 11.99a.938.938 0 01-1.15 0L5.247 9.54l1.15-1.48L15 14.75l8.602-6.69 1.15 1.48-9.177 7.137z'
				fill={fill}
			/>
		</svg>
	)
}

export default SvgComponent
