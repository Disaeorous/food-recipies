import React, { useEffect, useState } from 'react'

import RecipieCard from '../components/Card/RecipieCard';

import { fetchCuisine } from '../services/fetchCuisine';
import { useParams } from 'react-router-dom';

function Searched() {

	const [searchedRecipe, setSearchedRecipe] = useState([]);
	const [loading, setLoading] = useState(true);

	let params = useParams();

	useEffect(() => {
		getSearched(params.search);
		console.log(getSearched(params.search))
	}, [params.search]);

	const getSearched = async (input) => {
		const dataSearch = await fetchCuisine('complexSearch', 'query', input);
		setSearchedRecipe(dataSearch.results);

		if (!dataSearch.totalResults > 0) {
			console.log('There is no cuisine. Find another.')
			// setCuisine(null);
		}

		setLoading(false);
	}

	return (
		<>
			<section className='grid'>
					{ loading 
					? <h1>Loading</h1>
					: searchedRecipe.map((item) => {
						return (
							<RecipieCard key={item.id} id={item.id} title={item.title} image={item.image} />
						)
					}) }
				</section>
		</>
	)
}

export default Searched