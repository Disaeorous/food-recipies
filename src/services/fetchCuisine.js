const API_BASE_URL = 'https://api.spoonacular.com/recipes';
const API_GET_NAME = 'complexSearch';
// const API_CUISINE = 'American';

export const fetchCuisine = async (
	apiName = API_GET_NAME,
	queryName = 'cuisine',
	CUISINE
) => {
	const fetchAPI = await fetch(
		`${API_BASE_URL}/${apiName}/?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&${queryName}=${CUISINE}`
	);
	const fetchData = await fetchAPI.json();
	console.log(fetchData);

	return fetchData;
};
