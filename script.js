function searchWeather() {
    var apiKey = '9f29866ffa9cb2567d1690345da644ee'; 
    var city = document.getElementById('searchInput').value.trim();
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            displayWeather(response);
        } else {
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.send();
}

function displayWeather(data) {
    var temperature = document.getElementById('temperature');
    temperature.innerHTML = `${data.main.temp}°C`;

    var datetime = document.getElementById('datetime');
    var date = new Date(data.dt * 1000);
    datetime.innerHTML = date.toLocaleString();

    var city = document.getElementById('city');
    city.innerHTML = `${data.name.toUpperCase()}<i class="fas fa-thermometer-three-quarters"></i>`; // City name in capital letters

    var details = document.getElementById('details');
    details.innerHTML = `
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Temp_Min: ${data.main.temp_min}°C</p>
        <p>Temp_Max: ${data.main.temp_max}°C</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Visibility: ${data.visibility} m</p>
    `;
}
