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
			<g clipPath='url(#prefix__clip0)'>
				<path
					d='M29.803 8.718c0-2.637-1.94-4.758-4.336-4.758-3.246-.151-6.556-.21-9.94-.21h-1.054c-3.375 0-6.692.059-9.938.21-2.39 0-4.33 2.134-4.33 4.77A87.164 87.164 0 000 14.988a90.73 90.73 0 00.2 6.263c0 2.637 1.939 4.776 4.33 4.776 3.41.158 6.907.228 10.464.222 3.563.012 7.05-.062 10.465-.222 2.396 0 4.336-2.139 4.336-4.776a89.6 89.6 0 00.2-6.27 85.19 85.19 0 00-.192-6.263zM12.13 20.736V9.222l8.496 5.754-8.496 5.76z'
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
