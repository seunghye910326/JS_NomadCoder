


/*
    let / const
    const = constant 값이 절대 바뀌지 않음
    --> 값을 덮어쓰기 할 수 없음

    undefined / null
    undefined = 값을 정의 하지 않음
    null = 값이 없음




//-------------------------------------------------------------------------------------------------Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[4]);
console.log(daysOfWeek);

daysOfWeek.push("sun");
console.log(daysOfWeek);


//------------------------------------------------------------------------------------------------Object 
const player = {

    name : "seunghye",
    points : 10,
    fat : false,

}

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = true;
console.log(player);

//Object에 값을 추가할 때
player.lastName = "potato";
console.log(player);



//------------------------------------------------------------------------------------------------function


const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

//값을 돌려받기 위해 function을 작동 시킨 뒤 return을 한다.
//다중 function 사용시 내부부터 외부로 작동됨



//------------------------------------------------------------------------------------------------conditional

/*const age2 = prompt("how old are you?");

console.log(typeof "15", typeof parseInt("15"));
//prompt에 찍힌 값은 무조건 String -> number타입으로 사용하고 싶으면 형변환
parseInt()는 숫자가 아닌 글자를 만나게 되면 그글자 이후를 무시해버리고 해당지점까지의 정수값을 리턴
number()는 숫자가 아닌 값이 해당되어 있다면 무조건 NaN로 리턴



const age2 = parseInt(prompt("how old are you?"));
// -> number타입이 아닐 경우 NaN자료형으로 나옴

//console.log(isNaN(age2));
// isNaN() -> boolean값으로 리턴 


if(isNaN(age2) || age2 < 0){
    console.log("plz write a real positive number");
} else if (age2 < 18){
    console.log("you r too young");
} else if( age2 >= 18 && age2 <= 50 ){
    console.log("u can drink");
} else if(age2 > 50 && age2 <= 80) {
    console.log("u should exercise");
} else if(age2 > 80){
    console.log("u can do whatever u want")
}

*/



//-----------------------------------------------------------------------------------------document

/*
document.title = "Momentum JS";
const title = document.querySelector(".hello h1");
console.log(title);

//console.dir(title);
//title.innerText="got u";

/*document객체를 통해 요소를 가져오고 요소를 수정함!
-> 자바스크립트파일과 html파일을 나눠 요소를 가져와 수정하는 이유는
   추후에 편하고 빠르게 유지보수를 하기 위함도 있고, 
   (분리되어 있으므로 빠르게 유지보수를 위한 코드르 찾는 것이 가능하며)
   html은 정적 화면만을 위한 문서이기 때문에 분리를 하는 것이 좋다.


/* querySelector 
-> element를 CSS방식으로 검색할 수 있는 함수
-> 후손선택자를 이용하여 요소 내부에 있는 다른요소를 가져올 수 있음
-> 클래스name이 동일한 요소가 여러개 있어도 처음 존재하는 요소만 가져옴
    전부 가져오고싶으면 querySelectorAll() 함수 사용
*/






//----------------------------------------------------------------------------------------------event


/*
const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "pink";   
}

function handleMouseEnter(){
    h1.innerText = "mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
*/


//--------------------------------------------------------------------------------------------------window

/*function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("WIFI is connected");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

//--------------------------------------------------------------------------------------------------css

/* css / html / js로 파일을 나눠서 코드를 진행하는 방법
   변수명을 잘못 쓰는 실수를 방지하기 위해 변수를 새로 생성
   클래스명을 작성한 뒤에 js나 css에 새롭게 클래스명을 바꾼다면 덮어써진다.
   따라서 js에서는 클래스명을 바꾸지 말아야 한다.
*/

/*classList
  classList는 기존에 html에서 작성한 클래스명은 그대로 두면서
  새로운 클래스명을 같이 공존시키거나 클래스명을 없애는 작용을 한다.
  여러개의 클래스명을 다양한 파일에서 생성하거나 지울 때 쓴다.
*/

/*toggle
  토글은 h1의 classList에 clickedClass가 이미 있는지 확인해서 
  만약 있다면 clicked를 제거, 없다면 clicked를 생성
  if조건절까지 자동으로 확인해서 실행해준다.
  = classList.remove, classList.add의 성격을 동시에 지님
*/

/*const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){

    /*const currentColor = h1.style.color;
    let newColor;

    /*console.log(h1.style.color);
    h1.style.color = "lightblue";
    console.log(h1.style.color);

    if(currentColor === "lightblue"){
        newColor = "tomato";
    } else{
        newColor = "lightblue";
    }

    h1.style.color = newColor;
    

    //h1.className = "active";
    //css의 파일에서와 같이 생성

    //const clickedClass = "clicked";

    /*if(h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
    css에 작성한 .test css가 js에서 덮어써져서 작동을 안함!

   /* if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    

    h1.classList.toggle("clicked");


}

h1.addEventListener("click", handleTitleClick);
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){

    event.preventDefault();
    
    /*if(username === ""){
        alert("plz write ur name");
    } else if(username.length > 15){
        alert("ur name is too long");
    }*/
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(savedUsername);


}

function paintGreetings(username){

    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;

}

/*function handleLinkClick(event){

    event.preventDefault();
    console.dir(event);

}*/

//loginButton.addEventListener("click", onLoginBtnClick);

// 항상 user가 입력하는 값의 유효성을 확인할 것!!!!!!! 


//loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //username이 저장되어 있지 않다면 form태그를 보여주고
    loginForm.addEventListener("submit", onLoginSubmit);
    //submit버튼을 누르면 이벤트를 작동시킨다.
}else {
    paintGreetings(savedUsername);
}

/* preventDefault = stopPropagation 
기본적으로 submit을 하면 브라우저가 새로고침된다. = browserDefault
이를 막기 위해서 preventDefault라는 함수를 사용하면 새로고침(기본동작)을 막을 수 있다.
preventDefault는 event의 기본동작을 막는다.
기본동작1 : a태그에서 href속성을 넣어서 이동하는 경우 
기본동작2 : form태그안에 submit 버튼을 눌러 새로고침 되는 것
*/


/* visibility:hidden vs display:none
visibility는 요소의 공간은 그대로 두고 모양은 사라짐
display는 요소의 공간까지 사라짐
*/

/* `Hello ${username}` 백틱 = ``
*/



//----------------------------------------------------------------------------------------------save username

/* localStorage
브라우저에서 제공하는 값을 저장하여 기억해주는 API = localStorage
1. localStorage.setItem("key", "value"); key=value형식으로 저장됨
Application -> localStorage에서 확인할 수 있음
2. localStorage.getItem("key") 값 가져오기
3. localStorage.removeItem("key") 값 지우기
*/
