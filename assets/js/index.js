function Sidebar() {
    var mmenu=document.querySelector('.toggel-bg');
        mmenu.classList.toggle('show');
}

 var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
       
      },
       slidesPerView: 3,
       loop: true,



        breakpoints: {
            30: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 0
            }
        }
});

