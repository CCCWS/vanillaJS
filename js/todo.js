const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = todoForm.querySelector("input"); //todoForm의 input
const TODOS_KEY = "toDos";
let toDos = []; // 저장할 리스트, 변경되기때문에 const가 아닌 let

function todoSubmit(event) {
  //글자 입력후 enter시 입력
  event.preventDefault(); //enter시 화면 새로고침 방지
  const newTodo = todoInput.value; //입력값을 담을 변수
  todoInput.value = ""; //enter시 빈문자 추가
  const newTodoObj = { text: newTodo, id: Date.now() };
  //리스트대신 오브젝트로 저장, 리스트면 같은 문자일때 어느걸 지워야할지 모름, id값 부여해서 구분
  toDos.push(newTodoObj); //input에 적은값을 리스트에 추가
  saveTodos(); // 스토리지에 저장
  inputTodo(newTodoObj); //입력값을 넘겨줌
}
todoForm.addEventListener("submit", todoSubmit); //submit 이벤트 발생

function saveTodos() {
  //lacalstorage에 저장
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); //리스트를 string으로 저장
}

function inputTodo(newTodoObj) {
  //todoSubmit에서 newTodoObj를 받아옴
  //입력한 글자를 화면에 보여줄 html li 생성
  const newList = document.createElement("li");
  newList.id = newTodoObj.id; //삭제할때 구분을 위해 id값 부여
  const span = document.createElement("span");
  const button = document.createElement("button");
  todoList.appendChild(newList); //새로운 리스트 생성
  newList.appendChild(span); //생성된 리스트안에 태그 추가
  newList.appendChild(button); //버튼 생성
  button.innerText = "❌";
  span.innerText = newTodoObj.text; //오브젝트의 텍스트부분을 출력
  button.addEventListener("click", deleteTodo); //호출시 글자 삭제
}

function deleteTodo(event) {
  //버튼 클릭시 삭제
  console.dir(event.target.parentElement); // 정보 탐색
  const delLi = event.target.parentElement; // 삭제하고자 하는 li의 정보
  delLi.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(delLi.id));
  //클릭한 리스트의 아이디와 리스트의 아이디가 같으면 제외하고 나머지 저장
  //todo.id는 int형이고 delLi.id는 str이므로 형변환해줌
  saveTodos();
  //제거된 리스트는 다시 스토리지에 업로드
  // console.dir(event.target.parentElement);
}

const getTodos = localStorage.getItem("TODOS_KEY"); //로컬스트로지에 저장된 값을 불러옴
if (getTodos !== null) {
  //값이 있다면
  const parseTodos = JSON.parse(getTodos); //stringify로 문자열로 localStorage에 저장된 값을 리스트로 바꿈
  toDos = parseTodos; //localStorage에 있던 값들을 toDos에 저장
  parseTodos.forEach(inputTodo); // 리스트에 새로운 값을 추가하고 다시 localStorage에 저장
}

const delAllBtn = document.querySelector("#delAll"); //전체삭제
function delAll() {
  const ulTag = document.querySelector("ul");
  const test = document.querySelector("li");
  //   if (localStorage.getItem("TODOS_KEY") !== undefined) {
  //     ulTag.parentNode.removeChild(ulTag);
  //     localStorage.setItem("TODOS_KEY", "[]");
  //   }
  // while (true) {
  //   ulTag.removeChild(test);
  // }
  // for (let i = 0; i < ulTag.childNodes.length; i++) {
  //   // console.log(ulTag.childNodes[i]);
  //   ulTag.removeChild(ulTag.childNodes[i]);
  // }
  while (ulTag.childNodes.length > 0) {
    ulTag.removeChild(ulTag.firstChild);
    localStorage.setItem("TODOS_KEY", "[]");
    console.log(ulTag.childNodes);
  }
}

delAllBtn.addEventListener("click", delAll);

export { delAll };
