import React, { useEffect, useState } from 'react'

import Carousel from '../../Carousel';
import PropTypes from 'prop-types';
import { fetchRecipes } from '../../../services/fetchRecipes';

function Veggie( {title='Vegetarian'} ) {

	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		const check = localStorage.getItem('veggie');
		
		try {
			if (check) {
				setVeggie(JSON.parse(check));
			} else {
				const dataRecipe = await fetchRecipes('random', 9, 'vegetarian');
				setVeggie(dataRecipe);

				localStorage.setItem("veggie", JSON.stringify(dataRecipe));
				
				return dataRecipe;
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

Veggie.propTypes = {
	title: PropTypes.string,
}

export default Veggie