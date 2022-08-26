// import '../css/style.css';
// Variaveis
var rellax =  new Rellax('.rellax');

let shake = document.querySelector(".title")
let greyScale = document.querySelector(".img-main")
let verOfertas = document.querySelector(".btn-offers")


// Filtro na img da main
verOfertas.addEventListener('mouseover', function(e){
    greyScale.style.filter = 'grayscale(0%)';
})

verOfertas.addEventListener('mouseleave', function(e){
    greyScale.style.filter = 'grayscale(100%)';
})

// Shake no titulo da main
setInterval(function () {
    shake.classList.toggle('shake')
}, 2000);

// Animação de escrever
let typed = new Typed('.typedSkins', {
    strings: [" ", "SKINS"],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 3000
  });

setInterval(function () {
    var typedCursor = document.querySelector('.typed-cursor');
    typedCursor.style.opacity = '0';
}, 5000);

// Fechar/Abrir menu Mobile

let fecharMenuMob = document.querySelector('.btn-close-mob')
let abrirMenuMob = document.querySelector('.btn-menu-mob')
let menuMob = document.querySelector('.header-mob')

abrirMenuMob.addEventListener('click', function(e){
    menuMob.classList.toggle('dis-block')
})

menuMob.addEventListener('click', function (e){
    menuMob.classList.toggle('dis-block')
})