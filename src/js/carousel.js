const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,

  // Comportamento padrão (mobile)
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});