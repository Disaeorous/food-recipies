import React from 'react';
import '../styles/main.scss';

import Home from './Home';
import Cuisine from './Cuisine';

import { 
	Routes,
	Route 
} from 'react-router-dom';

export const Sheets = () => {
	return (
		<main className="main container">
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/cuisine' element={ <Cuisine /> } />
				<Route path='/cuisine/:type' element={ <Cuisine /> } />
			</Routes>
		</main>
	)
}