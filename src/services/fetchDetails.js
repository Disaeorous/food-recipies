const API_BASE_URL = 'https://api.spoonacular.com/recipes';

export const fetchDetails = async (id) => {
	const fetchAPI = await fetch(`
		${API_BASE_URL}/${id}/information?apiKey=${process.env.REACT_APP_FOOD_API_KEY}
	`);
	const fetchData = await fetchAPI.json();

	console.log(fetchData);

	return fetchData;
}