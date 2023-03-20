

const clock = document.querySelector("#clock");

/*

- setInterval(실행할 함수, 실행할 시간 ms단위) : 원하는 시간 간격으로 함수를 작동시키는 함수
- timeout(실행할 함수, 실행할 시간 ms단위) : 딱 한번만 동작

*/

/*

- padStart(원하는글자길이, 만약 원하는 글자길이가 아니라면 기본적으로 앞에 들어갈 값)
- padEnd(원하는글자길이, 만약 원하는 글자길이가 아니라면 기본적으로 뒤에 들어갈 값)
== 오라클의 lpad, rpad
문자만 적용되는 함수이므로 String으로 변환시켜줘야함

*/

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);

}

//setInterval(sayHello, 5000);

//setTimeout(sayHello, 5000);

getClock() //페이지가 바로 호출되자마자 시계를 띄워주기
setInterval(getClock, 1000);



