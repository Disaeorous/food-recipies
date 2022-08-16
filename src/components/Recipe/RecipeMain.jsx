import React from 'react';
import DOMPurify from 'dompurify';

function RecipeMain({ obj }) {
	const detail = obj;

	return (
		<div className='recipe-details__info'>
			<h1 className='recipe-details__title'>{detail.title}</h1>
			<img
				className='recipe-details__img'
				src={detail.image}
				alt={detail.title}
			/>

			<div className='recipe-details__info--secondary'>
				<h3 className='recipe-details__type'>
					Dish types:
					{detail.dishTypes &&
						detail.dishTypes.map((item, index) => (
							<span key={index}>{`${index ? ', ' : ' '}${item}`}</span>
						))}
				</h3>
				<p className='recipe-details__healthScore'>
					Health Score: <span>{detail.healthScore}</span>
				</p>
				<p className='recipe-details__cuisine'>
					Cuisines:
					{detail.cuisines.length > 0 ? (
						detail.cuisines.map((item, index) => (
							<span key={index}>{`${index ? ', ' : ' '}${item}`}</span>
						))
					) : (
						<span> There is no cuisine</span>
					)}
				</p>
				<div className='recipe-details__summary'>
					<span>Summary</span>
					<p
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(detail.summary),
						}}
					></p>
				</div>
			</div>
		</div>
	);
}

export default RecipeMain;
