const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");        
const API_KEY ="95af1b7777b4f7dd06b5170fc45f6b70";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`;
    });

}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);