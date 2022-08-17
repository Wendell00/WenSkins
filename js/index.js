// import '../css/style.css';

var rellax =  new Rellax('.rellax');

let shake = document.querySelector(".title")
let greyScale = document.querySelector(".img-main")

greyScale.addEventListener('mouseover', function(e){
    greyScale.classList.add('greyScaleAnime')
})

setInterval(function () {
    shake.classList.toggle('shake')
}, 2000);