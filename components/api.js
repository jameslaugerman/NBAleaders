async function fetchAPI(url) {
	const headers = { "Content-Type": "application/json" };

	const res = await fetch(url, {
		method: "GET",
		headers,
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error("Failed to fetch API");
	}
	return json.data[0];
}

export default fetchAPI;
