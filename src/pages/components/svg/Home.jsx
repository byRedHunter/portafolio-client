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
				d='M15.326 5.934a.469.469 0 00-.648 0L3.89 16.24a.469.469 0 00-.145.34l-.002 9.671a1.875 1.875 0 001.875 1.875h5.631a.937.937 0 00.938-.938V19.22a.469.469 0 01.468-.469h4.688a.469.469 0 01.468.469v7.968a.937.937 0 00.938.938h5.628a1.875 1.875 0 001.875-1.875v-9.672a.468.468 0 00-.144-.339L15.326 5.934z'
				fill='#000'
			/>
			<path
				d='M28.764 14.306l-4.383-4.193V3.75a.938.938 0 00-.937-.938h-2.813a.937.937 0 00-.937.938v1.875L16.3 2.38c-.317-.321-.79-.505-1.3-.505-.509 0-.98.184-1.297.506L1.24 14.305c-.365.351-.41.93-.079 1.31a.936.936 0 001.359.062L14.678 4.06a.469.469 0 01.648 0l12.16 11.618a.937.937 0 001.323-.025c.36-.373.33-.988-.045-1.346z'
				fill='#000'
			/>
		</svg>
	)
}

export default SvgComponent
