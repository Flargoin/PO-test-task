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
      spaceBetween: 20
    }
  }
 });

 const exampleSlider = new Swiper(".example__slider", {
  direction: 'horizontal',
  navigation: {
    nextEl: '.example__slider-next',
    prevEl: '.example__slider-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 20
    }
  }
 });
