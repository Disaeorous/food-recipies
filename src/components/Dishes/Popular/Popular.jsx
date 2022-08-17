import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../../services/fetchRecipes';

import Carousel from '../../Carousel';
import PropTypes from 'prop-types';
import Skeleton from '../../Skeleton';

function Popular({ title = 'Popular' }) {
	const [popular, setPopular] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			getPopular();
		}, 1000);
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');
		setLoading(false);

		try {
			setLoading(true);

			if (check) {
				setPopular(JSON.parse(check));
				setLoading(false);
			} else {
				const dataRecipe = await fetchRecipes('random', 9, 'dessert');
				setPopular(dataRecipe);

				localStorage.setItem('popular', JSON.stringify(dataRecipe));
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
		<article className='recipies popular grid-row-1'>
			<h2>{title} recipies</h2>

			{!loading ? (
				<Carousel item={popular} perPage={3} perMove={3} rewind={true} />
			) : (
				<Skeleton type={'dish'} count={4} />
			)}
		</article>
	);
}

Popular.propTypes = {
	title: PropTypes.string,
};

export default Popular;
