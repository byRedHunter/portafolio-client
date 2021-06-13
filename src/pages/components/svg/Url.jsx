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
				d='M15 2.813C8.27 2.813 2.812 8.268 2.812 15c0 6.73 5.457 12.188 12.188 12.188 6.73 0 12.188-5.457 12.188-12.188C27.188 8.27 21.73 2.812 15 2.812z'
				stroke='#000'
				strokeWidth={2}
				strokeMiterlimit={10}
			/>
			<path
				d='M15 2.813c-3.403 0-6.602 5.456-6.602 12.187 0 6.73 3.2 12.188 6.602 12.188S21.602 21.73 21.602 15c0-6.73-3.2-12.188-6.602-12.188z'
				stroke='#000'
				strokeWidth={2}
				strokeMiterlimit={10}
			/>
			<path
				d='M23.125 23.125c-2.24-1.59-5.061-2.54-8.125-2.54s-5.885.95-8.125 2.54m0-16.25c2.24 1.59 5.06 2.54 8.125 2.54 3.064 0 5.884-.95 8.125-2.54H6.875z'
				stroke='#000'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M27.188 15H2.813M15 2.812v24.375V2.813z'
				stroke='#000'
				strokeWidth={2}
				strokeMiterlimit={10}
			/>
		</svg>
	)
}

export default SvgComponent
