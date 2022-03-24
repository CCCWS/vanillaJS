구현된 기능   
1. 사용자 로그인   
   -사용자 이름 입력   
   -입력된 값을 localStorage에 저장   
   -저장된 값이 있을시 로그인 입력창 출력X   
   -새로고침시 저장된 값이 있으면 로그인창을 띄우지 않음   
   -로그인시 사용자의 이름 출력   
      
2. 시계   
   -화면에 현재 날짜와 시간 출력   
   -조건문으로 오전 오후 구분   
   -함수를 매초마다 실행하는것으로 시간 갱신   
      
3. 메모 리스트   
   -내용 입력시 내용과 삭제 버튼을 담은 리스트 생성   
   -생성된 내용은 id값과 함께 localStorage에 저장   
   -새로고침시 저장된 값이 있으면 해당 값을 담은 리스트 보존   
   -삭제 버튼 클릭시 리스트 제거와 localStorage의 값도 제거   
   
4. 글자 출력   
   -리스트에 담아준 문자를 랜덤하게 화면에 출력   
      
5. 배경화면   
   -리스트에 담아준 파일명과 같은 이미지를 랜덤하게 배경으로 출력   
      
6. 날씨   
   -위도와 경도를 받아와 현재 위치와 날씨 및 온도를 출력   
   -외부 api를 이용   
      
사용된 함수   
querySelector : html문서의 tag의 정보를 받아옴   
.innerText : html tag의 내에 작성된 문자열   
   
background.js    
백그라운드 이미지 추가   
Math.floor : 소숫점 내림   
Math.random : 0~1사이의 랜덤값      
.length : 리스트의 길이   
   
clock.js   
날짜와 시간 표시   
new Date( ) : 시간을 불러오는 함수   
date = new Date( ) : 변수에 담아서 사용 가능   
date.getFullYear( ) : 년   
date.getMonth( ) : 월, 0부터시작, 0=1월   
date.getDate( ) : 일   
date.getDay( ) : 요일, 0~6까지 수로 표현, 0=일요일, 글자로 표시하기위해 따로 리스트 생성   
date.getHours( ) : 시   
date.getMinutes( ) : 분   
date.get.Seconds( ) : 초   
.padStart(2, "0") : 2 > 최대 문자열 길이, 0 > 앞에 채워넣을 문자, String형에만 사용 가능   
.padEnd( ) > 문자 뒤에      
setInterval(함수. 1000) : 함수를 1000ms(1초)마다 반복실행   
setTimeout(함수, 1000) : 함수를 새로고침 1000ms이후 한번 실행    
   
login.js   
입력한 사용자의 이름 기억      
event.preventDefault( ) : submit발생시 페이지 새로고침같은 강제 이벤트를 막음   
localStorage.setItme("key", value) : 로컬스토리지에 key-value로 이루어진 아이템을 저장   
localStorage.getItem("key") : 로컬스토리지에서 해당 key값을 value를 가져옴   
.classList.add("클래스명") : 해당 태그에 import된 css파일의 class를 추가   
.classList.remove("클래스명") : 해당 태그의 class를 제거   
.addEventListener("이벤트명", 함수명) : 입력한 이벤트가 발생시 함수추가 클릭, 제출, 마우스닿기 등   
      
word.js   
랜덤한 글자를 표시   
.first-child : 첫번째 자식노드   
.nth-child(n) : n번째 자식노드   
.last-child : 마지막 자식노드   
   
todo.js      
입력한 글자를 표시 및 삭제   
Date.now( ) : 1970년 1월 1일 0시 0분 0초 이후를 ms초로 반환, 랜덤 상수를 얻기위해 사용   
.push( ) : 리스트의 맨뒤에 요소 추가   
JSON.Stringify( ) : object를 string형으로 변환    
JSON.parse( ) : 변환된 string을 다시 object로 변환   
parseInt( ) : int형으로 변환   
parsefloat( ) : float형으로 변환   
document.createElement( ) : html 태그 생성   
.appendChild( ) : 자식태그 추가   
console.dir(event.target.parentElement.innerText) : 해당 정보를 탐색   
.remove() : html 태그 제거   
.filter(함수 or (변수) => 조건  ) : 리스트의 요소마다 입력된 조건을 실행하여 새로운 배열 반환,    
true시 값반환 false시 값제외   
.forEach( ) : filter와 유사, 리스트의 값을 하나씩 받아서 실행   
   
weather.js   
api사용 현재 위치 기반 날씨 표시   
navigator.geolocation.getCurrentPosition(성공시함수, 실패시함수) : 위치나 wifi등 브라우저에서 좌표를 반환   
.coords.latitude : 위도   
.coords.longitude : 경도   
fatch(url) : js에서 대신 url을 호출   


--------------------------
추가내용

모듈화   
login.js에서 todo.js의 함수 사용   
받는 js와 보내는 js 둘다 html의 <script>에 type="module" 추가   
   
login.js   
import { 사용할 함수 } from "./todo.js";   
   
todo.js   
export { 사용할 함수 };   
   
css수정   
   
일괄삭제 버튼 추가   
   
모듈화를 통한 로그아웃시 todo 일괄 삭제   

