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
       autoplay: {
          delay: 3000,
        },
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

// const imgClick = document.querySelector(".img-click");
// const boxImg = document.getElementById("box-img");

// function OpanImg(pic) {
//     imgClick.style.display="flex";
//     boxImg.src=pic
// }
// function CloseImg() {
//     imgClick.style.display="none";
// }
