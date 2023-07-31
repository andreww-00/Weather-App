async function getWeather(location) {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?q=' + location + '&days=4&key=d88b6217605b468089c214057232707')
        const weatherData = await response.json();
        console.log(weatherData);
        weatherDisplay(weatherData);
        threeDayDisplay(weatherData);
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
    const conditionImage = document.querySelector('.condition_image');
    const conditionText = document.querySelector('.condition_text');

    location.textContent = weatherData.location.name;
    date.textContent = formatDate(weatherData.location.localtime);
    time.textContent = formatTime(weatherData.location.localtime);
    current_temp.textContent = weatherData.current.temp_f + '°F';
    highLow.textContent = 'Day ' + weatherData.forecast.forecastday[0].day.maxtemp_f + '°F • Night ' + weatherData.forecast.forecastday[0].day.mintemp_f + '°F';
    conditionImage.src = weatherData.current.condition.icon;
    conditionText.textContent = weatherData.current.condition.text;
}

function threeDayDisplay(weatherData) {
    const dayOne = document.querySelector('.weekday1');
    const dayTwo = document.querySelector('.weekday2');
    const dayThree = document.querySelector('.weekday3');
    const forecastOne = document.querySelector('.forecastTemp1');
    const forecastTwo = document.querySelector('.forecastTemp2');
    const forecastThree = document.querySelector('.forecastTemp3');
    const iconOne = document.querySelector('.forecast_img1');
    const iconTwo = document.querySelector('.forecast_img2');
    const iconThree = document.querySelector('.forecast_img3');

    dayOne.textContent = formatWeekDay(weatherData.forecast.forecastday[1].date);
    dayTwo.textContent = formatWeekDay(weatherData.forecast.forecastday[2].date);
    dayThree.textContent = formatWeekDay(weatherData.forecast.forecastday[3].date);
    forecastOne.textContent = 'Day ' + weatherData.forecast.forecastday[1].day.maxtemp_f + '°F • Night ' + weatherData.forecast.forecastday[1].day.mintemp_f + '°F';
    forecastTwo.textContent = 'Day ' + weatherData.forecast.forecastday[2].day.maxtemp_f + '°F • Night ' + weatherData.forecast.forecastday[2].day.mintemp_f + '°F';
    forecastThree.textContent = 'Day ' + weatherData.forecast.forecastday[3].day.maxtemp_f + '°F • Night ' + weatherData.forecast.forecastday[3].day.mintemp_f + '°F';
    iconOne.src = weatherData.forecast.forecastday[1].day.condition.icon;
    iconTwo.src = weatherData.forecast.forecastday[2].day.condition.icon;
    iconThree.src = weatherData.forecast.forecastday[3].day.condition.icon;
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

function formatWeekDay(input) {
    const options = {
        weekday: 'long'
    };
    const reformated = new Date(input);
    const outputDay = reformated.toLocaleString('en-us', options);
    return outputDay;
}

getWeather('virginia');