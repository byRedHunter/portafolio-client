import React from 'react'

import { Work } from './Work'

const listWork = [
	{
		_id: 1,
		image:
			'https://cdn.pixabay.com/photo/2021/06/15/13/20/banded-demoiselle-6338620__340.jpg',
		title: 'ShopingCake',
		badges: [
			{ _id: 1, name: 'react' },
			{ _id: 2, name: 'sass' },
		],
		desc: 'Social Media Dashboard, reto de FrontendMentor, aprendi a hacer dark/light mode y mejorar en css-grid y flex-box.',
		preview: 'https://byredhunter.github.io/dashboard-social-media/',
		repository: 'https://github.com/byRedHunter/dashboard-social-media',
	},
	{
		_id: 2,
		image:
			'https://cdn.pixabay.com/photo/2016/03/09/09/42/buildings-1245953__340.jpg',
		title: 'ClothesRandom',
		badges: [
			{ _id: 1, name: 'js' },
			{ _id: 2, name: 'html' },
			{ _id: 3, name: 'css' },
		],
		desc: 'Social Media Dashboard, reto de FrontendMentor, aprendi a hacer dark/light mode y mejorar en css-grid y flex-box.',
		preview: 'https://byredhunter.github.io/dashboard-social-media/',
		repository: 'https://github.com/byRedHunter/dashboard-social-media',
	},
]

export const Works = () => {
	return (
		<section className='works'>
			{listWork.map((work) => (
				<Work key={work._id} work={work} />
			))}
		</section>
	)
}
