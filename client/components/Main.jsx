import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Topic from './pages/Topic'

const Main = () => (

	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/topic' component={Topic} />
		</Switch>
	</main>

)

export default Main