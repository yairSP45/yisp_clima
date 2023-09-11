const getWheather = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cd81b0e2b5msh96c0a88d5a46e37p1cb6c7jsn29a70dda7eb3',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
	};
	
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if(result.success){
			cityFound = result.data
			newData()
			console.log(cityFound.bg_image)
		} else {
			alert('City was not found')
		}
		// console.log(result);
	} catch (error) {
		console.error(error);
	}
}