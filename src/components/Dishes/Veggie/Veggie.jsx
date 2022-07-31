import React, { useEffect, useState } from 'react'

import Carousel from '../../Carousel';

function Veggie( {title='Vegetarian'} ) {

	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		const api = 'https://api.spoonacular.com/recipes/random';
		const apiTag = 'vegetarian'
		const LIMIT = 9

		const check = localStorage.getItem('veggie');
		
		try {
			if (check) {
				setVeggie(JSON.parse(check));
			} else {
				const fetchAPI = await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=${LIMIT}&tags=${apiTag}`);
				const data = await fetchAPI.json();
				console.log(data);
	
				setVeggie(data.recipes);

				localStorage.setItem("veggie", JSON.stringify(data.recipes));
				return data;
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<article className='recipies grid-row-2'>
			<h2>{title} recipies</h2>
			{ 
				Carousel(veggie, 3, 2, true) 
			}
		</article>
	)
}

export default Veggie