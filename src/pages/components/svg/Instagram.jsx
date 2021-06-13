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
				d='M20.469 4.062a5.485 5.485 0 015.469 5.47v10.937a5.485 5.485 0 01-5.47 5.469H9.532a5.485 5.485 0 01-5.469-5.47V9.532a5.486 5.486 0 015.47-5.469h10.937zm0-2.187H9.53c-4.21 0-7.656 3.445-7.656 7.656V20.47c0 4.21 3.445 7.656 7.656 7.656H20.47c4.21 0 7.656-3.445 7.656-7.656V9.53c0-4.21-3.445-7.656-7.656-7.656z'
				fill='#f9f9f9'
			/>
			<path
				d='M22.11 9.531a1.64 1.64 0 110-3.28 1.64 1.64 0 010 3.28zM15 10.625a4.375 4.375 0 110 8.75 4.375 4.375 0 010-8.75zm0-2.188a6.563 6.563 0 100 13.126 6.563 6.563 0 000-13.125z'
				fill='#f9f9f9'
			/>
		</svg>
	)
}

export default SvgComponent
