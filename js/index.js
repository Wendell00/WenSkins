// import '../css/style.css';
// Variaveis
var rellax =  new Rellax('.rellax');

let shake = document.querySelector(".title")
let greyScale = document.querySelector(".img-main")
let verOfertas = document.querySelector(".btn-offers")


// Filtro na img da main
verOfertas.addEventListener('mouseover', function(e){
    greyScale.style.transition = '1s';
    greyScale.style.filter = 'grayscale(0%) drop-shadow(15px 10px 4px #222)';
})

verOfertas.addEventListener('mouseleave', function(e){
    greyScale.style.filter = 'grayscale(100%) drop-shadow(15px 10px 4px #222)';
    var tirarTransition = setInterval(function () {
        greyScale.style.transition = '0s';
        clearInterval(tirarTransition)
    }, 1100)
    
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

const fecharMenuMob = document.querySelector('.btn-close-mob')
const abrirMenuMob = document.querySelector('.btn-menu-mob')
const headerBgMob = document.querySelector('.header-bg-mob')
const menuMob = document.querySelector('.header-mob')
const navMob = document.querySelector('.nav-mob')

abrirMenuMob.addEventListener('click', function(e){
    menuMob.classList.toggle('dis-block')
    navMob.classList.add('cs-fade-from-right')
})

headerBgMob.addEventListener('click', function (e){
    menuMob.classList.toggle('dis-block')
})

fecharMenuMob.addEventListener('click', function (e){
    menuMob.classList.toggle('dis-block')
})

// Fechar/Abrir o Trocador de Cores

const switchColor = document.querySelector('.switchColor-bars')
const switchColorContainer = document.querySelector('.container-switchColor')

switchColorContainer.addEventListener('click', function (e){
    switchColor.classList.toggle('dis-none')
    switchColor.classList.toggle('cs-scale-up')
})

// const class_obj = document.querySelectorAll(".switchColor-circle")
// const nav1 = document.querySelector('.nav-1')

// class_obj.addEventListener('click', (event) =>{
//     console.log(class_obj)
//     nav1.classList.add(circulo_name)
// })

const componentColor = document.querySelectorAll('.switchColorID')
const circleRGB = document.querySelector('.circle-rgb')
const circleBlue = document.querySelector('.circle-blue')
const circleGreen = document.querySelector('.circle-green')

circleRGB.addEventListener('click', () =>{
    for(var count = 0; count < componentColor.length; count++){
        componentColor[count].style.backgroundImage = 'linear-gradient(45deg, hsl(240deg 100% 20%) 0%, hsl(289deg 100% 21%) 11%, hsl(315deg 100% 27%) 22%, hsl(329deg 100% 36%) 33%, hsl(337deg 100% 43%) 44%, hsl(357deg 91% 59%) 56%, hsl(17deg 100% 59%) 67%, hsl(34deg 100% 53%) 78%, hsl(45deg 100% 50%) 89%, hsl(55deg 100% 50%) 100%)'

    }    
})

circleBlue.addEventListener('click', () =>{
    for(var count = 0; count < componentColor.length; count++){
        componentColor[count].style.backgroundImage = ''
        componentColor[count].style.backgroundColor = 'blue';
    }    
})


circleGreen.addEventListener('click', () =>{
    for(var count = 0; count < componentColor.length; count++){
        componentColor[count].style.backgroundImage = ''
        componentColor[count].style.backgroundColor = 'green';
    }    
})

