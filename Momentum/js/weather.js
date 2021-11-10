const weatherContainer = document.querySelector('#weatherContainer');
const weather = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weatherIcon');
const temperature = document.querySelector('#temperature');
const city = document.querySelector('#city');

// api키 보안을 위해 숨겨주기
const API_KEY = config.API_KEY;

// 날씨 정보 접근 성공
function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // 위치정보를 이용해서 날씨 api에 접근
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // axios를 이용해서 http 요청 보내기
  axios.get(url)
    // response 객체가 가진 api 정보를 통해 날씨 정보 설정하기
    .then(res => {      
      weatherIcon.src = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
      weather.innerText = res.data.weather[0].main;
      city.innerText = res.data.name;
      temperature.innerText = `${res.data.main.temp}°C`;
    })
    .catch(err => {
      console.log('ERROR!', err);
    })
}

// 날씨 정보 접근 실패
function onGeoError() {
  alert("Can't find your location. Refresh the page and accept location check message");
}

// 자바스크립트로 현재 위치 가져오기. 성공했을 때와 실패했을 때, 두가지 콜백을 가진다. 
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);