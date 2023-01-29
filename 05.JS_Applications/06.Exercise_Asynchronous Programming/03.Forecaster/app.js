function attachEvents() {
    let getBtn = document.getElementById('submit')
    let location = document.getElementById('location');
    let forecastField = document.getElementById('forecast');
    let currentField = document.getElementById('current');
    let upcomingField = document.getElementById('upcoming');

    getBtn.addEventListener('click', getData)

    let symbolObj = {
        'Sunny': '☀', // ☀
        'Partly sunny': '⛅', // ⛅
        'Overcast': '☁', // ☁
        'Rain':	'☂', // ☂
        'Degrees': '°'   // °
    }

    async function getLocation() {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`;
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error('Error');
        }
        const data = await response.json();

        let locationData = {}
        data.forEach(x => {
            if (x.name === location.value) {
                locationData = x;
            }
        });

        return locationData;
    }

    async function getData() {
        let locationData = await getLocation();
        forecastField.style.display = 'block';

        let currentWeatherData = await currentConditionsData(locationData.code);
        currentConditions(currentWeatherData);

        let upcomingWeatherData = await threeDaysForecastData(locationData.code);
        threeDaysForecast(upcomingWeatherData);
    }

    async function currentConditionsData(_code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${_code}`;
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error('Error');
        }
        const data = await response.json();

        return data;
    }

    function currentConditions(data) {
        currentField.innerHTML = ''
        currentField.appendChild(createEl('div', 'Current conditions', ['label']));

        let symbol = symbolObj[data.forecast.condition];
        let name = data.name;
        let highLowTemp = `${data.forecast.low}${symbolObj.Degrees}/${data.forecast.high}${symbolObj.Degrees}`
        let condition = data.forecast.condition;

        let forecastDiv = createEl('div', '', ['forecasts']);
        currentField.appendChild(forecastDiv);

        forecastDiv.appendChild(createEl('span', symbol, ['condition', 'symbol']));

        let conditionsField = createEl('span', '', ['condition']);
        forecastDiv.appendChild(conditionsField);

        conditionsField.appendChild(createEl('span', name, ['forecast-data']));
        conditionsField.appendChild(createEl('span', highLowTemp, ['forecast-data']));
        conditionsField.appendChild(createEl('span', condition, ['forecast-data']));
    }

    async function threeDaysForecastData(_code) {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${_code}`);
        if (response.status !== 200) {
            throw new Error('Error');
        }
        const data = response.json();

        return data;
    }
    
    function threeDaysForecast(data) {
        upcomingField.innerHTML = '';
        upcomingField.appendChild(createEl('div', 'Three-day forecast', ['label']))

        let forecastInfo = createEl('div', '', ['forecast-info']);
        upcomingField.appendChild(forecastInfo);

       data.forecast.forEach(x => {
        highLowTemp = `${x.low}${symbolObj.Degrees}/${x.high}${symbolObj.Degrees}`
        condition = x.condition
        symbol = symbolObj[condition];

        let daySpan = createEl('span', '', ['upcoming']);
        forecastInfo.appendChild(daySpan);

        daySpan.appendChild(createEl('span', symbol, ['symbol']));
        daySpan.appendChild(createEl('span', highLowTemp, ['forecast-data']));
        daySpan.appendChild(createEl('span', condition, ['forecast-data']));
       })
    }
    
    function createEl(type, text, className) {
        let element = document.createElement(type);
        element.textContent = text;
        if (className) {
            className.forEach(x => element.classList.add(x))
        }
        return element;
    } 
}

attachEvents();