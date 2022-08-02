import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories';

import { Link, useParams } from 'react-router-dom';
import { fetchCuisine } from '../services/fetchCuisine';
import RecipieCard from '../components/Card/RecipieCard';

function Cuisine() {

	const [cuisine, setCuisine] = useState([]);
	const [loading, setLoading] = useState(true);

	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type])


	const getCuisine = async (name) => {
		const dataCuisine = await fetchCuisine('complexSearch', name);
		
		setCuisine(dataCuisine.results);
		setLoading(false);

		if (!dataCuisine.totalResults > 0) {
			console.log('There is no cuisine. Choose another.')
			// setCuisine(null);
		}

		return dataCuisine.results;
	}

	return (
		<>
			<div>
				<h1>Cuisine Component</h1>
				<Categories />
			</div>
			
			{/* { cuisine == null && <h3>There is no cuisine. Choose another.</h3> } */}

			<section className='grid'>
				{ loading 
				? <h1>Loading</h1>
				: cuisine.map((item) => {
					return (
						<RecipieCard key={item.id} title={item.title} image={item.image} />
					)
				}) }
			</section>
		</>
	)
}

export default Cuisine