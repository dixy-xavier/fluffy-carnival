const BASE_URL = "https://api.giphy.com";

const getSearchAPI = ({ searchStr }) => {
	console.log({ searchStr });
	const url = `${BASE_URL}/v1/gifs/search?q=${searchStr}&api_key=${process.env.REACT_APP_API_KEY}`;
	return networkCall(url);
	
};

const networkCall = (url) => {
	return fetch(url)
	.then(response => response.json())
	.then(({data}) => data)
	.catch(error => console.error(error));
}

export {
  getSearchAPI,
};
