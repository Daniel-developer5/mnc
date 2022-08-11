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
        slidesPerView: 'auto',
      }
    },
    on: {
      slideChangeTransitionEnd({ el }) {
        $(el).find('.swiper-slide').removeClass('larger-slide')
        $(el).find('.swiper-slide.swiper-slide-active').addClass('larger-slide')
      },
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
    on: {
      slideChangeTransitionEnd({ el }) {
        $(el).find('.swiper-slide').removeClass('larger-slide')
        $(el).find('.swiper-slide.swiper-slide-active').addClass('larger-slide')
      },
    },
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
      accrodionBody.slideUp()
      headers.removeClass('ui-state-active')
      images.removeClass('active')

      if (activeAccordion === i) {
        activeAccordion = null
        return
      }
  
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
  ScrollReveal().reveal('.scroll-anim', scrollAnimation)

  const navLinks = $('.navigation-links .link, .footer .links .link a')

  const removeLastSlash = url => url.replace(/\/$/, '')

  navLinks.each(function() {
    const locationHref = removeLastSlash(location.href)
    const linkHref = removeLastSlash(this.href)

    if (locationHref.includes(linkHref)) {
        $(this).addClass('active')
    }
  })
})
