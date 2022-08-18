// import '../css/style.css';

var rellax =  new Rellax('.rellax');

let shake = document.querySelector(".title")
let greyScale = document.querySelector(".img-main")
let verOfertas = document.querySelector(".btn-offers")

verOfertas.addEventListener('mouseover', function(e){
    greyScale.style.filter = 'grayscale(0%)';
})

verOfertas.addEventListener('mouseleave', function(e){
    greyScale.style.filter = 'grayscale(100%)';
})

setInterval(function () {
    shake.classList.toggle('shake')
}, 2000);