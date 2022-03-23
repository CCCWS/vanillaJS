const API_KEY = "b5ca0b1f1b1ff2ccea56184d385df768";

function weatherApi(position) { //position의 정보를 가져옴
  console.log(position);
  const lat = position.coords.latitude; //위도
  const log = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  //https://openweathermap.org/current &units=metric > 화씨를 섭씨로 변경
  fetch(url) //url요청 직접 갈필요없지 js에서 대신 부름
    .then((response) => response.json()) //url에 있는 내용이 모두 json
    .then((data) => {
      const nameTag = document.querySelector("#weather span:first-child");
      const weatherTag = document.querySelector("#weather span:last-child");
      nameTag.innerText = data.name;
      weatherTag.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
    }); //json의 data중에서 필요한부분만 골라서 출력
}
function weatherError() {
  alert("allow location");
}

navigator.geolocation.getCurrentPosition(weatherApi, weatherError);
//wifi 위치 gps등 정보를 브라우저에서 좌표를 줌/ 정상작동일때 실행, 에러일때 실행
