import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories';

import { Link, useParams } from 'react-router-dom';
import { fetchCuisine } from '../services/fetchCuisine';
import RecipieCard from '../components/Card/RecipieCard';

function Cuisine() {

	const [cuisine, setCuisine] = useState([]);

	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type])


	const getCuisine = async (name) => {
		const dataCuisine = await fetchCuisine('complexSearch', name);
		setCuisine(dataCuisine);
	}

	return (
		<>
			<div>
				<h1>Cuisine Component</h1>
				<Categories />
			</div>
			
			{ cuisine.map((item) => {
				return (
					<RecipieCard key={item.id} title={item.title} image={item.image} />
				)
			}) }

		</>
	)
}

export default Cuisine