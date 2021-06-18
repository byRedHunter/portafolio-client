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
	{
		_id: 3,
		image:
			'https://pixabay.com/es/photos/calle-personas-pasarela-camino-6254667/',
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
		_id: 4,
		image:
			'https://cdn.pixabay.com/photo/2021/06/10/22/14/stork-6327150__340.jpg',
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
		_id: 5,
		image:
			'https://cdn.pixabay.com/photo/2021/06/01/06/24/old-town-6300696__340.jpg',
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
		_id: 6,
		image:
			'https://cdn.pixabay.com/photo/2021/06/01/06/24/old-town-6300696__340.jpg',
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
		_id: 7,
		image:
			'https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999__340.jpg',
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
		_id: 8,
		image:
			'https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245__340.jpg',
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
		_id: 9,
		image:
			'https://cdn.pixabay.com/photo/2016/11/29/02/20/astronomy-1866822__340.jpg',
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
		_id: 10,
		image:
			'https://cdn.pixabay.com/photo/2014/05/10/18/10/saturn-341379__340.jpg',
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
		_id: 11,
		image:
			'https://cdn.pixabay.com/photo/2018/07/20/14/02/grapes-3550733__340.jpg',
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
		_id: 12,
		image:
			'https://cdn.pixabay.com/photo/2015/01/14/19/20/bake-599521__340.jpg',
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
		_id: 13,
		image:
			'https://cdn.pixabay.com/photo/2014/11/20/19/48/candies-539695__340.jpg',
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
		_id: 14,
		image:
			'https://cdn.pixabay.com/photo/2016/05/17/14/22/strawberry-1398159__340.jpg',
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
		_id: 15,
		image:
			'https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-3611698__340.jpg',
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
		_id: 16,
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
