

const API_KEY = "38aa904e54c648ef46d42731480cc330";


//실행에 성공하면 작동될 함수
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
         });

}


//실행에 실패할 때 작동될 함수
function onGeoError(){

    alert("Can't find you. No Weather for u");

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/*
    getCurrentPosition(성공했을때실행할함수, 실패했을때사용할함수) 

*/
