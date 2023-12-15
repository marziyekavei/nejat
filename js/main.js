const hamburger=document.querySelector('.hamburger-menu');
const navbar=document.querySelector('.navbar-nav');
const closemenu=document.querySelector('.close-menu');
const overlaymenu=document.querySelector('.overlay-menu');

hamburger.addEventListener('click', function(){
    navbar.classList.add('show');
    overlaymenu.classList.add('show');
})

closemenu.addEventListener('click', function(){
    navbar.classList.remove('show');
    overlaymenu.classList.remove('show');
})

overlaymenu.addEventListener('click', function(){
    navbar.classList.remove('show');
    overlaymenu.classList.remove('show');
})