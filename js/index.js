// import '../css/style.css';

var rellax =  new Rellax('.rellax');

let shake = document.querySelector(".title")

setInterval(function () {
    shake.classList.toggle('shake')
}, 2000);