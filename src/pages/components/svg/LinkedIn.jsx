import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M26.026 1.875H4.118c-1.197 0-2.243.861-2.243 2.044v21.957c0 1.189 1.046 2.249 2.243 2.249h21.901c1.204 0 2.106-1.067 2.106-2.25V3.92c.007-1.183-.902-2.044-2.1-2.044zm-16.014 21.88h-3.76V12.064h3.76v11.693zm-1.75-13.47h-.027c-1.204 0-1.983-.895-1.983-2.017 0-1.142.8-2.017 2.03-2.017 1.23 0 1.984.869 2.01 2.017 0 1.122-.78 2.018-2.03 2.018zm15.494 13.47h-3.76v-6.392c0-1.532-.548-2.579-1.909-2.579-1.04 0-1.654.704-1.928 1.388-.103.247-.13.582-.13.924v6.66h-3.76V12.063h3.76v1.627c.547-.779 1.402-1.9 3.391-1.9 2.469 0 4.336 1.627 4.336 5.135v6.83z'
				fill='#f9f9f9'
			/>
		</svg>
	)
}

export default SvgComponent
