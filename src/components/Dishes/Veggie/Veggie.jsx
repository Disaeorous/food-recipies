import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../../services/fetchRecipes';

import Carousel from '../../Carousel';
import PropTypes from 'prop-types';
import Skeleton from '../../Skeleton';

function Veggie({ title = 'Vegetarian' }) {
	const [veggie, setVeggie] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			getVeggie();
		}, 1000);
	}, []);

	const getVeggie = async () => {
		const check = localStorage.getItem('veggie');
		setLoading(false);

		try {
			setLoading(true);

			if (check) {
				setVeggie(JSON.parse(check));
				setLoading(false);
			} else {
				const dataRecipe = await fetchRecipes('random', 9, 'vegetarian');
				setVeggie(dataRecipe);

				localStorage.setItem('veggie', JSON.stringify(dataRecipe));
				setLoading(false);

				return dataRecipe;
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
		setLoading(false);
	};

	return (
		<article className='recipies veggie grid-row-2'>
			<h2>{title} recipies</h2>
			{/* { !loading && <h1>Loading</h1> } */}

			{!loading ? (
				<Carousel item={veggie} perPage={4} perMove={2} rewind={true} />
			) : (
				<Skeleton type={'dish'} count={4} />
			)}
		</article>
	);
}

Veggie.propTypes = {
	title: PropTypes.string,
};

export default Veggie;
