const API_BASE_URL = 'https://api.spoonacular.com/recipes';
const API_GET_NAME = 'random';
const API_LIMIT = 9;

export const fetchRecipes = async (
	NAME = API_GET_NAME,
	LIMIT = API_LIMIT,
	TAG
) => {
	const fetchAPI = await fetch(
		`${API_BASE_URL}/${NAME}/?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=${LIMIT}&tags=${TAG}`
	);
	const fetchData = await fetchAPI.json();
	console.log(fetchData);

	return fetchData.recipes;
};
