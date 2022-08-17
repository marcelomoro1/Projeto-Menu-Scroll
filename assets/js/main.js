//DATA NO FOOTER
const date = document.getElementById('date');
date.innerHTML = `${new Date().getFullYear()}`;


//ABRIR E FECHAR MENU
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')

navToggle.addEventListener('click', function () {
    linksContainer.classList.toggle('Active');
})

document.querySelectorAll('.a1').forEach(e => e.addEventListener('click', () => {
    linksContainer.classList.remove('Active');
}));


//FIXED NAVBAR NO PC E BOTÃO BACK TO TOP
 const navbar = document.getElementById('nav');
 const topLink = document.querySelector('.top-link');
 window.addEventListener('scroll', function(){ //Quando a tela carrega
     //APÓS ALGUNS PIXELS ADICIONA FIXED NAV BAR
     const scrollHeight = window.pageYOffset; //Altura do meu scroll do mouse
     const navHeight = navbar.getBoundingClientRect().height; //Altura da navbar
     if(scrollHeight>navHeight){
         navbar.classList.add('fixed-navbar');
     }
     else{
         navbar.classList.remove('fixed-navbar');
     }
     //APÓS ALGUNS PIXELS ADICIONA O BACK TO TOP BUTTON
     if (scrollHeight>=400){
         topLink.classList.add('show-back-to-top');
     }
     else{
         topLink.classList.remove('show-back-to-top');
     }
 });

//ARRUMAR TAMANHO DO SCROLL QUANDO FOR USAR O MENU
const navHeight = document.querySelector('nav').getBoundingClientRect().height;
document.documentElement.style.setProperty('--scroll-padding', navHeight + 'px');

