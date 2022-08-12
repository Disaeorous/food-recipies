import React from 'react';
import './recipieCard.scss';

import { Link } from 'react-router-dom';

function RecipieCard({ id, image, title }) {
	return (
		<article className='recipies-item'>
			<Link className='recipies-item__link' to={'/recipe/' + id}>
				<img className='recipies-img' src={image} alt={title} />
			</Link>

			<p className='recipies-title'>{title}</p>
		</article>
	);
}

export default RecipieCard;
