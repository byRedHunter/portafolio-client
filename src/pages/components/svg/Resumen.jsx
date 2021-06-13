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
			<path
				d='M14.063 12.656V1.875H5.39a.703.703 0 00-.704.703v24.844a.703.703 0 00.704.703h19.218a.703.703 0 00.703-.703V13.125h-10.78a.469.469 0 01-.47-.469z'
				fill={fill}
			/>
			<path
				d='M15.938 2.443v8.573a.235.235 0 00.234.234h8.573a.117.117 0 00.083-.2l-8.69-8.69a.117.117 0 00-.2.083z'
				fill={fill}
			/>
		</svg>
	)
}

export default SvgComponent
