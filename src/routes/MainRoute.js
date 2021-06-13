import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import { Sidebar } from '../pages/components/Sidebar'
import { Home } from '../pages/home/Home'
import { Contact } from '../pages/contact/Contact'
import { Portfolio } from '../pages/portfolio/Portfolio'
import { Resumen } from '../pages/resumen/Resumen'
import { Youtube } from '../pages/youtube/Youtube'

export const MainRoute = () => {
	return (
		<Router>
			<Sidebar />

			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/portfolio' component={Portfolio} />
					<Route path='/resumen' component={Resumen} />
					<Route path='/youtube' component={Youtube} />
					<Redirect to='/' />
				</Switch>
			</div>
		</Router>
	)
}
