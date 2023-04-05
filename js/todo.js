


const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];




//localStorage에 투두리스트를 영구적으로 저장하기
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/*
    localStorage에는 array를 저장할 수 없다.
    JSON은 원래 자바스크립트에서 데이터 교환 목적으로 만들어진 포맷
    JSON.stringify : 객체를 JSON으로 바꿔준다 
    JSON.parse : JSON을 객체로 바꿔준다

    -> 1. localStorage에 JSON.stringify를 이용하여 String으로 저장해준다
    -> 2. 다시 localStorage에 JSON.parse를 이용하여 array의 형태로 가져온다.

*/





//투두리스트 삭제하기
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

/* 
    parentNode(), parentElement() 
    target : 클릭된 HTML element
*/





//투두리스트 추가하기
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

/*

    ToDoList에 삭제할 값을 식별하기 위해 key=value형식으로 저장해줘야함
    li에 특정 id값을 부여하기 위해 Date.now()메소드를 사용하여 고유값을 부여

*/

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


/*
    
    filter
    {}안에 있는 조건에 해당되는 값만으로 새로운 arr를 만들어준다.
    기존의 arr에는 영향을 끼치지 x 


*/


/*

    arrow function(화살표함수)로 새로운 함수 생성보다는 간략하게 나타내기

    ex) 
    function hello(item){
        console.log("this is the turn of ", item);
    }
    ==
    array.forEach(item) => console.log("this is the turn of ", item);


*/

