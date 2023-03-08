/*
    let / const
    const = constant 값이 절대 바뀌지 않음
    --> 값을 덮어쓰기 할 수 없음

    undefined / null
    undefined = 값을 정의 하지 않음
    null = 값이 없음


*/

//---------------------------------------------------------------------------------------------Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[4]);
console.log(daysOfWeek);

daysOfWeek.push("sun");
console.log(daysOfWeek);


//----------------------------------------------------------------------------------------------Object 
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
*/


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



