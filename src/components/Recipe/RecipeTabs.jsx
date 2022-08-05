import React, { useState } from 'react';
import DOMPurify from 'dompurify';

import RecipeIngredients from './RecipeIngredients';

function RecipeTabs( {obj} ) {
	const detail = obj;
	const [activeTab, setActiveTab] = useState("instructions");

	return (
		<>
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
				<RecipeIngredients obj={detail} />
			}
		</>
	)
}

export default RecipeTabs