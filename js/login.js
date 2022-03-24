import { delAll } from "./todo.js";

const loginForm = document.querySelector("#loginForm"); //이름 입력창과 로그인 버튼 포함
const loginInput = document.querySelector("#loginForm input"); //이름 입력창
const showId = document.querySelector("#showId"); //입력한 이름을 보여주는 창
const HIDDEN_CLASSNAME = "hidden"; //반복된 string을 사용할땐 하나로 묶는게 용이
const USERID_KEY = "userId";

function loginSubmit(event) {
  event.preventDefault(); //새로고침 방지
  const userId = loginInput.value;
  localStorage.setItem("USERID_KEY", userId); // 로컬스토리지에 입력한값 저장
  loginForm.classList.add("hidden"); //함수 실행시 사라짐
  loginForm.classList.remove("loginForm");
  alert(`Welcome ${userId}`);
  loginInput.value = "";
  showUserId(userId); //로그인창에 입력한 값
}

function showUserId(userId) {
  //showId.innerText = "Welcome " + userId;
  showId.innerText = `Welcome ${userId}`;
  showId.classList.remove(HIDDEN_CLASSNAME);
  showId.classList.add("showIdCss");
}

const saveUserId = localStorage.getItem("USERID_KEY"); //로컬스토리지에 저장된 유저정보를 가져옴
if (saveUserId === null) {
  //불러온 유저정보가 비어있다면 로그인 창 띄움
  loginForm.classList.remove(HIDDEN_CLASSNAME); //기존 hidden클래스를 제거하면 display 바꿀필요X
  loginForm.classList.add("loginForm");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  showUserId(saveUserId);
  //유저정보 있으면 로그인 건너뜀
  //위에선 입력한 값을 가져왔지만
  //여기에선 스토리지의 값을 가져옴
}

const logOutBtn = document.querySelector("#logOut");
function logOut() {
  if (localStorage.getItem("USERID_KEY") == null) {
  } else {
    showId.classList.remove("showIdCss");
    showId.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.classList.add("loginForm");
    alert(`Goodbye ${localStorage.getItem("USERID_KEY")}`);
    localStorage.removeItem("USERID_KEY");
    delAll();
  }
}

logOutBtn.addEventListener("click", logOut);
