const API_BASE_URL = 'https://api.spoonacular.com/recipes';
const API_GET_NAME = 'complexSearch';
// const API_CUISINE = 'American';

export const fetchCuisine = async (NAME=API_GET_NAME, CUISINE) => {

	const fetchAPI = await fetch(
		`${API_BASE_URL}/${NAME}/?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&cuisine=${CUISINE}`
		);
	const fetchData = await fetchAPI.json();
	console.log(fetchData);

	return fetchData.results;
}