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

let csScrollDown = document.querySelector('.cs-scroll-down')

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

// var waypoint = new Waypoint({
//     element: document.querySelector('.cs-scroll-down'),
//     handler: function(direction) {
//         csScrollDown.classList.toggle("cs-fade-out")
//         changeActive()
//     },
//     offset: '70%'
//   })