const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1df53b052msh88185c8d98c37cap1d90d1jsnded8c90d1ddd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => { 
    cityName.innerHTML = city
    cityName2.innerHTML = city
    cityName3.innerHTML = city
    cityName4.innerHTML = city
    

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
.then(response => response.json())
.then(response => {
    
    console.log(response)

    
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

})
.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})


getWeather("Delhi")

//Washinton data
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=washington',options)
.then(response => response.json())
.then(response => {
    
    console.log(response)    
    cloud_pct_washing.innerHTML = response.cloud_pct
    temp_washing.innerHTML = response.temp
    feels_like_washing.innerHTML = response.feels_like
    humidity_washing.innerHTML = response.humidity
    min_temp_washing.innerHTML = response.min_temp
    max_temp_washing.innerHTML = response.max_temp
    wind_speed_washing.innerHTML = response.wind_speed
    wind_degrees_washing.innerHTML = response.wind_degrees
    sunrise_washing.innerHTML = response.sunrise
    sunset_washing.innerHTML = response.sunset
})
.catch(err => console.error(err));

 //varanasi data

 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Varanasi',options)
.then(response => response.json())
.then(response => {
    
    console.log(response)    
    cloud_pct_varanasi.innerHTML = response.cloud_pct
    temp_varanasi.innerHTML = response.temp
    feels_like_varanasi.innerHTML = response.feels_like
    humidity_varanasi.innerHTML = response.humidity
    min_temp_varanasi.innerHTML = response.min_temp
    max_temp_varanasi.innerHTML = response.max_temp
    wind_speed_varanasi.innerHTML = response.wind_speed
    wind_degrees_varanasi.innerHTML = response.wind_degrees
    sunrise_varanasi.innerHTML = response.sunrise
    sunset_varanasi.innerHTML = response.sunset
})
.catch(err => console.error(err));

//jammu data

    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jammu',options)
.then(response => response.json())
.then(response => {
    
    console.log(response)    
    cloud_pct_jammu.innerHTML = response.cloud_pct
    temp_jammu.innerHTML = response.temp
    feels_like_jammu.innerHTML = response.feels_like
    humidity_jammu.innerHTML = response.humidity
    min_temp_jammu.innerHTML = response.min_temp
    max_temp_jammu.innerHTML = response.max_temp
    wind_speed_jammu.innerHTML = response.wind_speed
    wind_degrees_jammu.innerHTML = response.wind_degrees
    sunrise_jammu.innerHTML = response.sunrise
    sunset_jammu.innerHTML = response.sunset
})
.catch(err => console.error(err));

//banglore data
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bengaluru',options)
.then(response => response.json())
.then(response => {
    
    console.log(response)    
    cloud_pct_bengaluru.innerHTML = response.cloud_pct
    temp_bengaluru.innerHTML = response.temp
    feels_like_bengaluru.innerHTML = response.feels_like
    humidity_bengaluru.innerHTML = response.humidity
    min_temp_bengaluru.innerHTML = response.min_temp
    max_temp_bengaluru.innerHTML = response.max_temp
    wind_speed_bengaluru.innerHTML = response.wind_speed
    wind_degrees_bengaluru.innerHTML = response.wind_degrees
    sunrise_bengaluru.innerHTML = response.sunrise
    sunset_bengaluru.innerHTML = response.sunset
})
.catch(err => console.error(err));