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

  const fixNav = () => {
    if (window.scrollY > 0) {
      $('.navigation').addClass('fixed')
    } else {
      $('.navigation').removeClass('fixed')
    }
  }

  fixNav()
  $(window).on('scroll', fixNav)

  const calcPaddingTop = () => {
    $('.secondary-page-hero').css('padding-top', $('header.navigation').outerHeight())
    $('.search-page .search-block').css('margin-top', $('header.navigation').outerHeight())
  }

  calcPaddingTop()

  const transformImg = () => {
    return
    $('.accordions-section .accordion-body .img-box img').each(function (i) {
      const height = $('.accordions-section .accordion-header').eq(i).height()
      
      $(this).css({
        maxHeight: 448 + height,
        transform: `translateY(${-height}px)`,
      })
    })
  }

  transformImg()

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
    transformImg()
  })
})
