const button = document.getElementById('tap');
const taps = document.getElementById('tapp')
const div = document.getElementById('show1');
const menu = document.querySelector('#menu-icon');
const menuIcon = document.querySelector('.navMobile');
const menuRemover = document.querySelector('#menu-icon1');
const navbar = document.querySelector('.MobileNavbar');
const dash = document.querySelector('.common');
var styles = window.getComputedStyle(div);

button.addEventListener('click',() =>{
    if(styles.getPropertyValue("display")== "none")
    {
        div.style.display = 'flex';
        button.style.display = 'none'
        dash.style.display = 'block'
    }
})
dash.addEventListener('click',() =>{
    if(div.style.display == 'flex'){
        div.style.display = 'none';
        button.style.display = 'block'
        dash.style.display = 'none'
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
