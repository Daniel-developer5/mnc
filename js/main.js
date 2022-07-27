$(() => {
  new Swiper('.cars-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    navigation: {
      prevEl: '.cars-slider .arrow-left',
      nextEl: '.cars-slider .arrow-right',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1136: {
        slidesPerView: 4,
      }
    },
  })

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

  const fixNav = () => {
    if (window.scrollY > 0) {
      $('.navigation').addClass('fixed')
    } else {
      $('.navigation').removeClass('fixed')
    }
  }

  fixNav()
  $(window).on('scroll', fixNav)

  $('.nav-toggle-btn').click(() => {
    $('.full-screen-nav').toggleClass('open')

    setTimeout(() => {
      $('.full-screen-nav').toggleClass('animated')
    }, 500)
  })

  const calcPaddingTop = () => {
    $('.secondary-page-hero').css('padding-top', $('header.navigation').outerHeight())
    $('.search-page .search-block').css('margin-top', $('header.navigation').outerHeight())
  }

  calcPaddingTop()

  const accrodionBody = $('.accordions-section .accordions .accordion-body')
  const headers = $('.accordions-section .accordions .accordion-header')
  const images = $('.accordions-section .accordions .img-box')
  accrodionBody.slideUp()
  let activeAccordion = null

  headers.each(function (i) {
    $(this).click(function () {
      if (activeAccordion === i) {
        return
      }
  
      accrodionBody.slideUp()
      headers.removeClass('ui-state-active')
      images.removeClass('active')
  
      accrodionBody.eq(i).slideDown()
      $(this).addClass('ui-state-active')
      images.eq(i).addClass('active')
  
      activeAccordion = i
    })
  })

  $(window).on('resize', () => {
    calcPaddingTop()
  })

  const scrollAnimation = {
    afterReveal(el) {
      $(el).addClass('animated')
    },
    opacity: null,
  }

  ScrollReveal().reveal('.slide-up', scrollAnimation)
  ScrollReveal().reveal('.inset-anim', scrollAnimation)
  ScrollReveal().reveal('.section-mark', scrollAnimation)
})
