import Swiper, { Navigation, Pagination } from 'swiper';

 Swiper.use([Navigation, Pagination]);

 const serviceSlider = new Swiper(".services__slider", {
  direction: 'horizontal',

  breakpoints: {
    320: {
      slidesPerView: 1,
      navigation: {
        nextEl: '.services__slider-next',
        prevEl: '.services__slider-prev',
      }
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    991: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: false
    }
  }
 });

 const paymentsSlider = new Swiper(".payment__slider", {
  direction: 'horizontal',

  breakpoints: {
    320: {
      slidesPerView: "auto",
      navigation: {
        nextEl: '.payment__slider-next',
        prevEl: '.payment__slider-prev',
      }
    },

    576: {
      spaceBetween: 20,
    },

    991: {
      spaceBetween: 30,
      navigation: false
    }
  }
 });
