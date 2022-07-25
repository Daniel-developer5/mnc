$(() => {
  new Swiper('.premium-marks-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    navigation: {
      prevEl: '.premium-marks-slider .arrow-left',
      nextEl: '.premium-marks-slider .arrow-right',
    },
    breakpoints: {
      1136: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      }
    },
    on: {},
  })
})
