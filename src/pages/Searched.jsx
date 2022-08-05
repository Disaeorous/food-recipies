import React, { useEffect, useRef, useState } from 'react'

import RecipieCard from '../components/Card/RecipieCard';

import { fetchCuisine } from '../services/fetchCuisine';
import { useParams } from 'react-router-dom';

function Searched() {

	const [searchedRecipe, setSearchedRecipe] = useState([]);
	const [loading, setLoading] = useState(true);
	const warning = useRef(false);

	let params = useParams();

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	const getSearched = async (input) => {
		const dataSearch = await fetchCuisine('complexSearch', 'query', input);
		setSearchedRecipe(dataSearch.results);

		if (!dataSearch.totalResults > 0) {
			console.log('There is no cuisine. Find another.');
			warning.current = true;
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
							<React.Fragment key={item.id}>
								{ warning.current = false }
								<RecipieCard id={item.id} title={item.title} image={item.image} />
							</React.Fragment>
						)
					}) }
					{ warning.current && <h1>Request not found. Try to find something different.</h1> }
				</section>
		</>
	)
}

export default Searched