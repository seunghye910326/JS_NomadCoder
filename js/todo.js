


const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];

//localStorage에 투두리스트를 영구적으로 저장하기
function saveToDos(){
    localStorage.setItem("todoS", JSON.stringify(toDos));
}

/*
    localStorage에는 array를 저장할 수 없다.
    JSON은 원래 자바스크립트에서 데이터 교환 목적으로 만들어진 포맷
    JSON.stringify : 객체를 JSON으로 바꿔준다 
    JSON.parse : JSON을 객체로 바꿔준다
*/

//투두리스트 삭제하기
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

/* 
    parentNode(), parentElement() 
    target : 클릭된 HTML element
*/


//투두리스트 추가하기
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

/*
    * append()와 appendChild() 차이
    append는 문자열도 추가가 가능
    append는 객체만 추가 가능
    appendChild()로 문자열 추가할 시 typeerror가 뜸
*/



function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    //엔터를 누르면 내용이 사라지도록 하기 -> 그전에 input value값을 담기
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //console.log(newTodo, toDoInput.value); //toDoInput값은 공백으로 표시됨
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);