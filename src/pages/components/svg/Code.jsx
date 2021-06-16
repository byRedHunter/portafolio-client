import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={512}
			height={512}
			viewBox='0 0 512 512'
			fill='none'
			{...props}
		>
			<path
				d='M161.98 397.63L0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zm188.04 0l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63zM222.15 442L182 430.08 289.85 70 330 81.92 222.15 442z'
				fill='#9f5eff'
			/>
		</svg>
	)
}

export default SvgComponent
