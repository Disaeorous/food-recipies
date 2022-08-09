import React, { useEffect, useState } from 'react';
import './recipe.scss';

import { fetchDetails } from '../../services/fetchDetails';
import { useParams } from 'react-router-dom';
import RecipeMain from '../../components/Recipe/RecipeMain';
import RecipeTabs from '../../components/Recipe/RecipeTabs';
import Skeleton from '../../components/Skeleton';

function Recipe() {

	let params = useParams();

	const [detail, setDetail] = useState({});
	const [loading, setLoading] = useState(true);

	const recipeData = async () => {
		const fetchData = await fetchDetails(params.name);
		setDetail(fetchData);
		setLoading(false);
	} 
	
	useEffect(() => {
		setTimeout(()=> {
			recipeData();
		}, 1000);
	}, [params.name]);

	return (
		<>
			{ loading ? 
			<Skeleton type={"circle"} />
			: <section className='recipe-details'>
				
					<RecipeMain obj={detail} />

					<div className='recipe-details__info'>
						<RecipeTabs obj={detail} />
					</div>
				</section>
			}
		</>
	)
}

export default Recipe