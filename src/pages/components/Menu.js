import React from 'react'
import MenuIcon from './svg/MenuIcon'

import './menu.css'
import { useInterface } from '../../store/useInterface'

export const Menu = () => {
	const { toggleSidebar } = useInterface((state) => state)

	return (
		<div className='menu-icon' onClick={() => toggleSidebar()}>
			<MenuIcon />
		</div>
	)
}
