import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			width={31}
			height={31}
			viewBox='0 0 31 31'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clipPath='url(#prefix__clip0)'>
				<path
					d='M22.982.776H8.217a1.055 1.055 0 00-1.055 1.055v27.89a1.055 1.055 0 001.055 1.055h14.765a1.055 1.055 0 001.055-1.055V1.831A1.055 1.055 0 0022.982.776zm-13.71 26.25v-22.5h12.656v22.5H9.27z'
					fill='#000'
				/>
			</g>
			<defs>
				<clipPath id='prefix__clip0'>
					<path fill='#fff' transform='translate(.6 .776)' d='M0 0h30v30H0z' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default SvgComponent
