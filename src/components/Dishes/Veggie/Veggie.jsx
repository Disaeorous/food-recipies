import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../../../services/fetchRecipes';

import Carousel from '../../Carousel';
import PropTypes from 'prop-types';

function Veggie( {title='Vegetarian'} ) {

	const [veggie, setVeggie] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		const check = localStorage.getItem('veggie');
		
		try {
			setLoading(true);

			if (check) {
				setVeggie(JSON.parse(check));
			} else {
				const dataRecipe = await fetchRecipes('random', 9, 'vegetarian');
				setVeggie(dataRecipe);

				localStorage.setItem("veggie", JSON.stringify(dataRecipe));
				setLoading(false);
				
				return dataRecipe;
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	}

	return (
		<article className='recipies grid-row-2'>
			<h2>{title} recipies</h2>
			{/* { !loading && <h1>Loading</h1> } */}

			{ loading ? 
				<Carousel
					item={veggie}
					perPage={4}
					perMove={2}
					rewind={true} />
				: <h1>Loading</h1> 
			}
		</article>
	)
}

Veggie.propTypes = {
	title: PropTypes.string,
}

export default Veggie