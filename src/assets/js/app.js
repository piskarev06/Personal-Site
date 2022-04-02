const swiper = new Swiper('.intro__slider ', {
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 20,
})
// End of Intro Slider

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav__link').forEach((el) => {
          if (el.getAttribute('href').replace('#', '') === entry.target.id) {
            el.classList.add('active')
          } else {
            el.classList.remove('active')
          }
        })
      }
    })
  },
  {
    threshold: 0.7,
  },
)

document.querySelectorAll('.section').forEach((el) => {
  observer.observe(el)
})

const navigationListener = (wrapper, children, number) => {
  document.querySelector(wrapper).addEventListener('click', (e) => {
    if (e.target.classList.contains(children)) {
      e.preventDefault()

      const id = e.target.getAttribute('href').replace('#', '')

      window.scrollTo({
        top: document.getElementById(id).offsetTop - number,
        behavior: 'smooth',
      })
    }
  })
}

navigationListener('.header__list', 'nav__link', 63)
navigationListener('.intro__buttons', 'btn--fill', 63)
navigationListener('.footer__block', 'footer__scroll', 63)
navigationListener('.navigation__list', 'nav__link', 0)

// End Of Scroll

import Typed from 'typed.js'

var typed = new Typed('.accent', {
  strings: ['Frontend Developer ^1000', '^1000 Designer'],
  typeSpeed: 100,
})

// End Of Typed

AOS.init({
  duration: 1000,
})

// End Of AOS

const portfolioTabs = document.getElementById('portfolioTabs')
const portfolioContent = document.querySelectorAll('.content__item')

const changeClass = (el, tabs) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active')
  }
  el.classList.add('active')
}

const listener = (tabs, content) => {
  tabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.btn
    changeClass(e.target, tabs)
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove('active')
      if (content[i].dataset.content === currentTab) {
        content[i].classList.add('active')
      }
    }
  })
}

listener(portfolioTabs, portfolioContent)

// End of Tabs

document.querySelectorAll('.list__title--footer ').forEach((el) => {
  el.addEventListener('click', () => {
    const parent = el.parentNode

    if (parent.classList.contains('footer__wrapper--active')) {
      parent.classList.remove('footer__wrapper--active')
    } else {
      document
        .querySelectorAll('.footer__wrapper')
        .forEach((child) => child.classList.remove('.footer__wrapper--active'))

      parent.classList.add('footer__wrapper--active')
    }
  })
})

// End of Accordion

let loader = document.getElementById('preloader')

window.addEventListener('load', () => {
  loader.style.display = 'none'
})

// End Of Preloader

// const iconMenu = document.querySelector('.header__icon')
// const menuBody = document.querySelector('.header__menu')
// if (iconMenu) {
//   iconMenu.addEventListener('click', function (e) {
//     document.body.classList.toggle('_lock')
//     iconMenu.classList.toggle('_active')
//     menuBody.classList.toggle('_active')
//   })
// }
// // End of Burger
