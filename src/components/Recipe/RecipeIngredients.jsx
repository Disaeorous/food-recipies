import React from 'react';

function RecipeIngredients({ obj }) {
	const detail = obj;

	return (
		<>
			<div className='recipe-details__ingredients'>
				{detail.extendedIngredients &&
					detail.extendedIngredients.map(ingredient => {
						return (
							<div key={ingredient.id}>
								<p>
									<span>Name: </span>
									{ingredient.name}
								</p>
								<p>
									<span>Aisle: </span>
									{ingredient.aisle}
								</p>
								<img
									className='recipe-details__img'
									src={`https://spoonacular.com/recipeImages/${ingredient.image}`}
									alt={ingredient.name}
								/>
								<h4 className='recipe-details__ingredient'>
									{ingredient.original}
								</h4>
							</div>
						);
					})}
			</div>
		</>
	);
}

export default RecipeIngredients;
