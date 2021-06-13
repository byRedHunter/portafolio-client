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
			<rect x={2} y={13} width={36} height={5} rx={1} fill='#ea5455' />
			<rect x={8} y={23} width={30} height={5} rx={1} fill='#ea5455' />
		</svg>
	)
}

export default SvgComponent
