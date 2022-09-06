const button = document.getElementById('tap');
const div = document.querySelector('.show');

button.addEventListener('click',() =>{
    if(div.style.display == 'none'){
        div.style.display = 'flex';
    }
    else{
        div.style.display = 'none'
    }
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 2,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
  });