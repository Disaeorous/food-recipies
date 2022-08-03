import React, { useEffect, useState } from 'react';
import './recipe.scss';

import { fetchDetails } from '../../services/fetchDetails';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

function Recipe() {

	let params = useParams();

	const [detail, setDetail] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");

	const recipeData = async () => {
		const fetchData = await fetchDetails(params.name);
		setDetail(fetchData);
	} 

	useEffect(() => {
		recipeData();
	}, [params.name]);

	return (
		<section className='recipe-details'>
			<div className='recipe-details__info'>
				<h1 className='recipe-details__title'>{detail.title}</h1>
				<img className='recipe-details__img  recipe-details__img--m' src={detail.image} alt={detail.title} />
				
				<div className='recipe-details__info--secondary'>
					<h3 className='recipe-details__type'>Dish types: <span>{detail.dishTypes}</span></h3>
					<p className='recipe-details__healthScore'>Health Score: <span>{detail.healthScore}</span></p>
					<p className='recipe-details__cuisine'>Cuisines: <span>{detail.cuisines}</span></p>
					<div className='recipe-details__summary'>
						<span>Summary</span>
						<p dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(detail.summary)} }></p>
					</div>
				</div>
			</div>

			<div className='recipe-details__info'>

				<div className='recipe-cta'>
					<button 
						className={activeTab === "instructions" ? "active" : ""} 
						onClick={() => setActiveTab("instructions")} 
						type='button'>
						Instructions
					</button>
					<button
						className={activeTab === "ingredients" ? "active" : ""}
						onClick={() => setActiveTab("ingredients")}
						type='button'>
						Ingredients
					</button>
				</div>
				
				{ activeTab === "instructions" &&
					<p
						className='recipe-details__instructions'
						dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(detail.instructions)} }>
					</p> 
				}
				
				{ activeTab === "ingredients" &&
					<div className='recipe-details__ingredients'>
						{ detail.extendedIngredients &&
							detail.extendedIngredients.map((ingredient) => {
								return (
									<div key={ingredient.id}>
										<p><span>Name: </span>{ingredient.name}</p>
										<p><span>Aisle: </span>{ingredient.aisle}</p>
										<img className='recipe-details__img' src={`https://spoonacular.com/recipeImages/${ingredient.image}`} alt={ingredient.name}/>
										<h4>{ingredient.original}</h4>
									</div>
								)
						}) }
					</div> 
				}
				
			</div>
		</section>
	)
}

export default Recipe