async function getWeather(location) {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?q=' + location + '&days=3&key=d88b6217605b468089c214057232707')
        const weatherData = await response.json();
        console.log(weatherData);
        weatherDisplay(weatherData);
    } catch (error) {
        console.log('error');
    }
}

function weatherDisplay(weatherData) {
    const location = document.querySelector('.location');
    const date = document.querySelector('.date');
    const time = document.querySelector('.time');
    const current_temp = document.querySelector('.current_temp');
    const highLow = document.querySelector('.highLow');

    location.textContent = weatherData.location.name;
    date.textContent = formatDate(weatherData.location.localtime);
    time.textContent = formatTime(weatherData.location.localtime);
}

function formatDate(inputDate) {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    const reformated = new Date(inputDate);
    const outputDate = reformated.toLocaleString('en-us', options);
    return outputDate;
};

function formatTime(inputTime) {
    const options = {
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const reformated = new Date(inputTime);
    const outputTime = reformated.toLocaleString('en-us', options);
    return outputTime;
};

getWeather('virginia');