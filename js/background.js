
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


/* 

createElement(만들고싶은요소) 만들어진 요소는 자리를 지정해주기전까지 아무곳에도 생성이 안되어 있음

*/
