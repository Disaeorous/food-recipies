import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../../services/fetchRecipes';

import Carousel from '../../Carousel';
import PropTypes from 'prop-types';

function Popular( {title='Popular'} ) {
	
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');
		
		try {
			if (check) {
				setPopular(JSON.parse(check));
			} else {
				const dataRecipe = await fetchRecipes('random', 8, 'dessert');
				setPopular(dataRecipe);

				localStorage.setItem("popular", JSON.stringify(dataRecipe));

				return dataRecipe;
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<article className='recipies grid-row-1'>
			<h2>{title} recipies</h2>
			{ 
				Carousel(popular, 4, 2, true) 
			}
		</article>
	)
}

Popular.propTypes = {
	title: PropTypes.string,
}

export default Popular