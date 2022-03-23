

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]; //불러올 이미지와 파일명이 같아야함
const randomImages = images[Math.floor(Math.random() * images.length)]; //랜덤한 이미지 생성
const body = document.body;
body.style.backgroundImage = "url(" + randomImages + ")"; //body태그에 backgraund속성 삽입

/*img.src = `${randomImages}`; 
img.id = "bgImg";
const img = document.createElement("img"); //html 태그를 js에서 생성
//document.body.appendChild(img); //하위에 태그 생성 prepend 맨앞
//document.body.insertBefore(img, h3); 지정 태그 앞에 생성, 
해당 방식 사용시 이미지 속성이 backgraund가 아니라 단순히 태그를 생성해 이미지를 추가함*/
