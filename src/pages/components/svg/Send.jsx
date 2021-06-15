import * as React from 'react'

function SvgComponent({ fill = '#f9f9f9' }) {
	return (
		<svg
			width={32}
			height={32}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M1 29l30-13L1 3v10l20 3-20 3v10z' fill={fill} />
		</svg>
	)
}

export default SvgComponent
