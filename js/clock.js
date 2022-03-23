const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date(); //날짜를 불러오는 함수
  const year = date.getFullYear(); //년
  const month = date.getMonth() + 1; //월
  const day = date.getDate(); //일
  const week = date.getDay(); //요일
  const weekList = ["일", "월", "화", "수", "목", "금", "토"]; //getDay()는 숫자로 반환, 해당 숫자에 반환될 요일 리스트
  let hours = date.getHours(); //시
  if (hours > 12) {
    hours = `오후 ${hours - 12}`;
  } else {
    hours = `오전 ${hours}`;
  }
  const minutes = String(date.getMinutes()).padStart(2, "0"); //분
  const seconds = String(date.getSeconds()).padStart(2, "0"); //초 .padStart를 사용하기위해 문자열로 형변환

  clock.innerText = `${year}.${month}.${day} ${weekList[week]}
  ${hours}:${minutes}:${seconds}`;
}

getTime(); //화면을 새로고침하고 바로 시간이 갱신
setInterval(getTime, 1000); //함수를 지정한 시간을 간격으로 반복적 실행
// // setTimeout(hello, 1000); //함수를 지정한 시간이후 한번 실행
