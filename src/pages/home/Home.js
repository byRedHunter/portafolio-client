import React from 'react'

import './home.css'

import { Hero } from './components/Hero'
import { Technologies } from './components/Technologies'
import { Skills } from './components/Skills'

const Home = () => {
	return (
		<>
			<Hero />
			<Technologies />
			<Skills />
		</>
	)
}

export default Home
