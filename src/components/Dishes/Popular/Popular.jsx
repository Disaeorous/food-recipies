import React, { useEffect, useState } from 'react';

import Carousel from '../../Carousel';

function Popular( {title='Popular'} ) {
	
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const api = 'https://api.spoonacular.com/recipes/random';
		const LIMIT = 9

		const check = localStorage.getItem('popular');
		
		try {
			if (check) {
				setPopular(JSON.parse(check));
			} else {
				const fetchAPI = await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=${LIMIT}`);
				const data = await fetchAPI.json();
				console.log(data);
	
				setPopular(data.recipes);

				localStorage.setItem("popular", JSON.stringify(data.recipes));
				return data;
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<article className='recipies grid-row-1'>
			<h2>{title} recipies</h2>
			{ 
				Carousel(popular, 4, 2) 
			}
		</article>
	)
}

export default Popular