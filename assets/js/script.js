const apiKey = "10f6ba80c71db186f1e6f954fce66b1c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');




/**
 * Fonction application météo basée sur le nom de la ville par le site
 * OpenWeather
 */
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display ='block';
        document.querySelector('.weather').style.display ='none';
    }
    else{
        var data = await response.json();

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed.toFixed(1) + ' km/h';
    
        if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "assets/images/clear.png";
        }
        else if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "assets/images/clouds.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "assets/images/rain.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "assets/images/mist.png";
        }
        else if(data.weather[0].main == 'Snow'){
            weatherIcon.src = "assets/images/snow.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "assets/images/drizzle.png";
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display ='none';
    }
};


searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)

});




