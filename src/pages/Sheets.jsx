import React from 'react';
import '../styles/main.scss';

import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import NotFound from './NotFound';

import { Routes, Route } from 'react-router-dom';

export const Sheets = () => {
	return (
		<main className='main container'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cuisine/:type' element={<Cuisine />} />
				<Route path='/search/:search' element={<Searched />} />
				<Route path='/recipe/:name' element={<Recipe />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</main>
	);
};
