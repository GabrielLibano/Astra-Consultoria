const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');



tl.to('.logoAnimado', {y:"0%",z:"100%",duration: 5, stagger: 0.25});
tl.to('.carregamento', {y: "-100%", duration: 1}, "-=1");
tl.fromTo(".principal", {opacity: 0}, {opacity:1, duration:2});
tl.fromTo(".main-servicos", {opacity: 0}, {opacity:1, duration:.5});
//tl.fromTo(".main-servicos", {opacity: 0}, {opacity:1, duration:2});

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle("open")
})