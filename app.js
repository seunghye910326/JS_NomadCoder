/*
    let / const
    const = constant 값이 절대 바뀌지 않음
    --> 값을 덮어쓰기 할 수 없음

    undefined / null
    undefined = 값을 정의 하지 않음
    null = 값이 없음


*/

//Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[4]);
console.log(daysOfWeek);

daysOfWeek.push("sun");
console.log(daysOfWeek);


//Object 
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

