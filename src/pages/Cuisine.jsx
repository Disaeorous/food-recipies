import React, { useEffect, useState, useRef } from 'react'

import { Link, useParams } from 'react-router-dom';
import { fetchCuisine } from '../services/fetchCuisine';
import RecipieCard from '../components/Card/RecipieCard';

function Cuisine() {

	const [cuisine, setCuisine] = useState([]);
	const [loading, setLoading] = useState(true);
	const warning = useRef(false);

	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type])


	const getCuisine = async (name) => {
		const dataCuisine = await fetchCuisine('complexSearch', 'cuisine', name);
		
		setCuisine(dataCuisine.results);
		setLoading(false);

		if (!dataCuisine.totalResults > 0) {
			console.log('There is no cuisine. Choose another.')
			// setCuisine(null);
			warning.current = true;
		}

		return dataCuisine.results;
	}

	return (
		<>
			
			{/* { cuisine == null && <h3>There is no cuisine. Choose another.</h3> } */}

			<section className='grid'>
				{ loading 
				? <h1>Loading</h1>
				: cuisine.map((item) => {
					return (
						<React.Fragment key={item.id}>
							{ warning.current = false }
							<RecipieCard id={item.id} title={item.title} image={item.image} />
						</React.Fragment>
					)
				}) }
				{ warning.current && <h1>Cuisine not found</h1> }
			</section>
		</>
	)
}

export default Cuisine