const button = document.getElementById('tap');
const taps = document.getElementById('tapp')
const div = document.querySelector('.show');
const menu = document.querySelector('#menu-icon');
const menuIcon = document.querySelector('.navMobile');
const menuRemover = document.querySelector('#menu-icon1');
const navbar = document.querySelector('.MobileNavbar');

button.addEventListener('click',() =>{
    if(div.style.display == 'none'){
        div.style.display = 'flex';
    }
    else{
        div.style.display = 'none'
    }
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: screen.width<600 ? 1 :2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
  });



menu.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('off')

}
menuRemover.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('off')

}
