async function getWeather(location) {
    try{
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?q=' + location + '&days=3&key=d88b6217605b468089c214057232707')
    const weatherData = await response.json(); 
    console.log(weatherData); 
    weatherDisplay(weatherData);
    } catch(error) {
        console.log('error');
    }
}

function weatherDisplay(APIdata) {
    console.log(APIdata.current.condition.text);
}
getWeather('virginia');