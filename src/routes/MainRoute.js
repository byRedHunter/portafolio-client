import React, { Suspense, lazy } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import { Sidebar } from '../pages/components/Sidebar'
import { Menu } from '../pages/components/Menu'
import { Loading } from '../pages/components/Loading'

const Home = lazy(() => import('../pages/home/Home'))
const Contact = lazy(() => import('../pages/contact/Contact'))
const Portfolio = lazy(() => import('../pages/portfolio/Portfolio'))
const Resumen = lazy(() => import('../pages/resumen/Resumen'))
const Youtube = lazy(() => import('../pages/youtube/Youtube'))

export const MainRoute = () => {
	return (
		<Router>
			<Sidebar />

			<main className='main'>
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/contact' component={Contact} />
						<Route path='/portfolio' component={Portfolio} />
						<Route path='/resumen' component={Resumen} />
						<Route path='/youtube' component={Youtube} />
						<Redirect to='/' />
					</Switch>
				</Suspense>
			</main>

			<Menu />
		</Router>
	)
}
