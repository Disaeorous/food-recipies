import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../../services/fetchRecipes';

import Carousel from '../../Carousel';
import PropTypes from 'prop-types';

function Popular( {title='Popular'} ) {
	
	const [popular, setPopular] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');
		
		try {
			setLoading(true);

			if (check) {
				setPopular(JSON.parse(check));
			} else {
				const dataRecipe = await fetchRecipes('random', 8, 'dessert');
				setPopular(dataRecipe);

				localStorage.setItem("popular", JSON.stringify(dataRecipe));
				setLoading(false);

				return dataRecipe;
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	}

	return (
		<article className='recipies grid-row-1'>
			<h2>{title} recipies</h2>
			
			{ loading ? 
				<Carousel
					item={popular}
					perPage={4}
					perMove={2}
					rewind={true} />
				: <h1>Loading</h1> 
			}
		</article>
	)
}

Popular.propTypes = {
	title: PropTypes.string,
}

export default Popular