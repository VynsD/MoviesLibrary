const proxy = "https://cors-anywhere.herokuapp.com/";

export const fetchShows = async () => {
	const endpoint = "https://api.tvmaze.com/shows";
	const response = await fetch(
		`${proxy}${endpoint}`,
		{
			method: "GET",
			headers: { "Content-Type": "application/json" }
		}
	);
	return await response.json();
};

export const fetchSrcShow = async (textSrc: string | null = null) => {
	const endpoint = "https://api.tvmaze.com/search/shows";
	const response = await fetch(
		textSrc
			? `${proxy}${endpoint}?q=${textSrc}`
			: `${proxy}${endpoint}`,
		{
			method: "GET",
			headers: { "Content-Type": "application/json" }
		}
	);
	return await response.json();
};

export const fetchShowDetail = async (movieId: number) => {
	const endpoint = `https://api.tvmaze.com/shows/${movieId}?&embed[]=cast`;
	const response = await fetch(
		`${proxy}${endpoint}`,
		{
			method: "GET",
			headers: { "Content-Type": "application/json" }
		}
	);
	return await response.json();
};
