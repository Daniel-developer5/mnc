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
        slidesPerView: 1,
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

  const fullScreenNav = $('.full-screen-nav')

  $('.nav-toggle-btn').click(() => {
    if (fullScreenNav.hasClass('open')) {
      fullScreenNav.removeClass('open')

      setTimeout(() => {
        fullScreenNav.removeClass('animated')
      }, 500)

      setTimeout(() => {
        fullScreenNav.css('display', 'none')
      }, 600)
    } else {
      fullScreenNav.css('display', 'flex')
      
      setTimeout(() => {
        fullScreenNav.addClass('open')
      }, 100)
      
      setTimeout(() => {
        fullScreenNav.addClass('animated')
      }, 500)
    }
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

  const fullImg = new Swiper('.full-screen-nav .bg-image', {
    effect: 'fade',
    draggable: false,
    speed: 1300,
  })

  const colorFullImg = new Swiper('.full-screen-nav .colorful-img', {
    effect: 'fade',
    draggable: false,
    speed: 800,
  })

  $('.full-screen-nav .navigation-links li').hover(function () {
    fullImg.slideTo($(this).index())
    colorFullImg.slideTo($(this).index())
  })

  const portfolioEvenRows = $('.portfolio-gallery-section .row:nth-child(even)')  
  const portfolioOddRows = $('.portfolio-gallery-section .row:nth-child(odd)')
  const oddRatio = 670 / 960
  const evenRatio = 670 / 640

  const calcPortfolioRowsSize = (rows, divider, ratio) => {
    rows.each(function () {
      const height = $(this).width() / divider * ratio

      $(this).css('height', window.innerWidth >= 768 ? height : 'auto')
    })
  }

  calcPortfolioRowsSize(portfolioOddRows, 2, oddRatio)
  calcPortfolioRowsSize(portfolioEvenRows, 3, evenRatio)

  const gridGalleryRatio = 550 / 856
  const gridGalleryRatioMob = 320 / 390

  const resizeGridGallery = () => {
    const colWidth = $('.gallery-grid-section .col').width()

    $('.gallery-grid-section .img-box').css(
      'height',
      (colWidth ? colWidth : window.innerWidth) * (window.innerWidth >= 768 ? gridGalleryRatio : gridGalleryRatioMob)
    )
  }

  resizeGridGallery()

  $(window).on('resize', () => {
    calcPaddingTop()
    calcPortfolioRowsSize(portfolioOddRows, 2, oddRatio)
    calcPortfolioRowsSize(portfolioEvenRows, 3, evenRatio)
    resizeGridGallery()
  })
})
