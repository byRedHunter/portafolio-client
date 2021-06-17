import React from 'react'

import { CvHeader } from './CvHeader'
import { CvExperience } from './CvExperience'
import { CvFormation } from './CvFormation'
import { CvHbility } from './CvHbility'
import { CvLenguages } from './CvLenguages'

export const Cv = () => {
	return (
		<div className='cv'>
			<CvHeader />
			<CvExperience />
			<CvFormation />
			<CvHbility />
			<CvLenguages />
		</div>
	)
}
