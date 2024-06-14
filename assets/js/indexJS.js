const phonesBtn = document.querySelector(".header-phones__btn")
const phonesList = document.querySelector(".header-phones__list")
const phonesItem = document.querySelectorAll(".header-phones__item")

document.addEventListener("click", showNumbers)
document.addEventListener("keydown", showNumbersEsc)

function showNumbers(event) {
   if (event.target.closest(".header-phones__btn")) {
      phonesList.classList.toggle('header-phones__list-active')
      phonesBtn.classList.toggle('header-phones__btn-active')
      phonesItem.forEach(item => {
         item.classList.toggle('header-phones__item-active')
      });
   }
   if (!event.target.closest('.header-phones__btn')) {
      phonesList.classList.remove('header-phones__list-active')
      phonesBtn.classList.remove('header-phones__btn-active')
      phonesItem.forEach(item => {
         item.classList.remove('header-phones__item-active')
      });
   }

}

const menuWrapper = document.querySelector('.menu-catalog')
const menu = document.querySelector('.sub-menu-catalog')
const subMenuCatalogBlock = document.querySelectorAll('.sub-menu-catalog__block')
const menu1 = document.getElementById('menu1')
const menu2 = document.getElementById('menu2')
const subMenu1 = document.getElementById('subMenu1')
const subMenu2 = document.getElementById('subMenu2')
const menuLink = document.querySelectorAll('.menu-catalog__link')

document.addEventListener('click', showCatalog)

function showCatalog(event) {
   if (event.target.classList.contains('menu-catalog__link')) {
      event.target.classList.toggle('menu-catalog__link-active');
      const allLinks = document.querySelectorAll('.menu-catalog__link');
      allLinks.forEach(link => {
         if (link !== event.target) {
            link.classList.remove('menu-catalog__link-active');
         }
      });
   }
   if (event.target.classList.contains('menu-catalog__link_not-active')) {
      subMenuCatalogBlock.forEach((allSubMenuCatalogBlock) => {
         allSubMenuCatalogBlock.classList.remove('sub-menu-catalog__block-open')
      })
   }
}

function showNumbersEsc(event) {
   if (event.code === 'Escape') {
      phonesList.classList.remove('header-phones__list-active')
      phonesBtn.classList.remove('header-phones__btn-active')
      subMenu1.classList.remove('sub-menu-catalog__block-open')
      subMenu2.classList.remove('sub-menu-catalog__block-open')
      headerTopMenu.classList.remove('menu_active')
      menuBtn.classList.remove('menu__btn_active')
      //      menu.classList.remove('sub-menu-catalog-open')
      menuLink.forEach(item => {
         item.classList.remove('menu-catalog__link-active')
      });
      phonesItem.forEach(item => {
         item.classList.remove('header-phones__item-active')
      });
   }
}

window.onblur = function () {
   document.title = 'Возвращайтесь😊';
};
window.onfocus = function () {
   document.title = 'MyProjectS';
};




document.addEventListener('mouseup', mobileMenu)

const menuCatalog = document.querySelector('.menu-catalog')
const menuBody = document.querySelector('.menu__body')
const menuCatalogContainer = document.querySelector('.menu-catalog__container')
const headerTopMenu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__btn')

function mobileMenu(event) {
   if (event.target.closest('.menu__btn')) {
      headerTopMenu.classList.toggle('menu_active')
      menuBtn.classList.toggle('menu__btn_active')
   }

   if (!event.target.closest('.menu__btn') && !event.target.closest('.menu')) {
      headerTopMenu.classList.remove('menu_active')
      menuBtn.classList.remove('menu__btn_active')
   }
   if (event.target.closest('.menu__link-next')) {
      menuCatalog.classList.add('menu-catalog-active')
      menuBody.classList.add('menu__body_active')
      menuCatalogContainer.classList.add('menu-catalog__container_active')
      //subMenu1.classList.add('sub-menu-catalog__block-open')
   }
   if (event.target.id === 'menu1') {
      menu.classList.add('sub-menu-catalog-open')
      //menuWrapper.classList.toggle('sub-menu-catalog-open')
      subMenu1.classList.toggle('sub-menu-catalog__block-open')
      subMenu2.classList.remove('sub-menu-catalog__block-open')
      menuCatalogContainer.classList.remove('menu-catalog__container_active')
      menuCatalogContainer.classList.add('menu-catalog__container_close')
   }
   if (event.target.id === 'menu2') {
      menu.classList.add('sub-menu-catalog-open')
      subMenu2.classList.toggle('sub-menu-catalog__block-open')
      subMenu1.classList.remove('sub-menu-catalog__block-open')
      menuCatalogContainer.classList.remove('menu-catalog__container_active')
      menuCatalogContainer.classList.add('menu-catalog__container_close')
   }
   if (event.target.closest('.menu__back-btn')) {
      if (!menuBody.classList.contains('menu__body_active')) {
         menuBtn.click();
      }
      if (menuCatalogContainer.classList.contains('menu-catalog__container_active')) {
         menuCatalog.classList.remove('menu-catalog-active');
         menuBody.classList.remove('menu__body_active')
      }
      menuCatalogContainer.classList.add('menu-catalog__container_active')
      menuCatalogContainer.classList.remove('menu-catalog__container_close')
      subMenu1.classList.remove('sub-menu-catalog__block-open')
      subMenu2.classList.remove('sub-menu-catalog__block-open')
   }
}

const headerTopContainer = document.querySelector('.header-top__container')
var x = document.documentElement.clientWidth;
if (x <= 1000) {
   const bottomTransition = document.querySelector('.bottom-transition')
   bottomTransition.appendChild(menuCatalog);

   const headerFavorite = document.querySelector('.header-action__favorite')
   headerTopContainer.appendChild(headerFavorite);

   const headerCart = document.querySelector('.header-cart')
   headerTopContainer.appendChild(headerCart);

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
         } else {
            headerTopMenu.classList.remove('menu_active')
            menuBtn.classList.remove('menu__btn_active')
         }
      });
   }, {
      root: null,
      rootMargin: '280px',
      threshold: 0,
   });
   const targetElement = document.querySelector('.menu__body');
   observer.observe(targetElement);
}
if (x <= 768) {
   const headerPhones = document.querySelector('.header-phones')
   headerTopContainer.appendChild(headerPhones);
}
if (x <= 426) {
   const headerBottom = document.querySelector('.header-bottom')
   const headerSearch = document.querySelector('.header-center__search')
   headerBottom.appendChild(headerSearch);
}

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   parallax: true,
   pagination: {
      el: '.swiper-paginationd',
      type: 'bullets',
      clickable: true,
   },
   on: {
      init: function (swiper) {
         const swiperFractioTotal = document.querySelector('.swiper-pagination-total');
         swiperFractioTotal.innerHTML = swiper.slides.length;
      },
      slideChange: function (swiper) {
         const swiperFractioCurrent = document.querySelector('.swiper-pagination-current');
         swiperFractioCurrent.innerHTML = swiper.realIndex + 1;
         if (swiper.realIndex + 1 < 10) {
            swiperFractioCurrent.innerHTML = '0' + (swiper.realIndex + 1);
         } else {
            swiperFractioCurrent.innerHTML = swiper.realIndex + 1;
         }
      }
   },
});


const tip = document.querySelectorAll('.description-block-img__tip');

tip.forEach(item => {
   if (x > 768) {
      item.addEventListener('mouseenter', function (event) {
         event.target.classList.add('description-block-img__tip_active');
      });
      item.addEventListener('mouseleave', function (event) {
         event.target.classList.remove('description-block-img__tip_active');
      });
      tippy(tip, {
         duration: [null, 650],
      });
   }
   if (x <= 768) {
      item.addEventListener('click', function (event) {
         event.target.classList.toggle('description-block-img__tip_active');
      });
      tippy(item, {
         trigger: 'click',
         hideOnClick: 'toggle',
      });
   }
});

const swiperTwo = new Swiper('.product-card-slider__swiper', {
   direction: 'horizontal',
   spaceBetween: 32,
   loop: true,
   watchOverflow: true,
   observeParents: true,
   autoplay: {
      delay: 2800,
      //pauseOnMouseEnter: true,
      //stopOnLastSlide: true,
   },
   pagination: {
      el: '.product-card-slider__pagination',
      type: 'bullets',
      clickable: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      420: {
         slidesPerView: 1.3,
         spaceBetween: 20,
      },
      530: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
      700: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1400: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
});

const swiperNew = new Swiper('.product-card-slider__swiper-new', {
   direction: 'horizontal',
   spaceBetween: 32,
   watchOverflow: true,
   observeParents: true,
   autoplay: {
      delay: 2800,
      //pauseOnMouseEnter: true,
      //stopOnLastSlide: true,
   },
   pagination: {
      el: '.product-card-slider__pagination_new',
      type: 'bullets',
      clickable: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      426: {
         slidesPerView: 1.2,
         spaceBetween: 20,
      },
      494: {
         slidesPerView: 1.4,
         spaceBetween: 20,
      },
      623: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      735: {
         slidesPerView: 1.2,
         spaceBetween: 20,
      },
      850: {
         slidesPerView: 1.6,
         spaceBetween: 20,
      },
      934: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1400: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },
});

const spoilerOpenBtn = document.querySelectorAll('.spoiler-open-btn');

spoilerOpenBtn.forEach((allSpoilerOpenBtn) => {
   allSpoilerOpenBtn.addEventListener('click', spoiler)
});

function spoiler(event) {
   if (!event.target.classList.contains('spoiler-open-btn_active') && event.target.classList.contains('spoiler-open-btn')) {
      spoilerOpenBtn.forEach((allSpoilerOpenBtn) => {
         allSpoilerOpenBtn.classList.remove('spoiler-open-btn_active')
      });
      const spoilerContent = document.querySelectorAll('.spoiler-content')
      spoilerContent.forEach((allSpoilerContent) => {
         allSpoilerContent.classList.remove('spoiler-content_active')
      });
   }
   if (event.target.classList.contains('spoiler-open-btn')) {
      event.target.classList.toggle('spoiler-open-btn_active');
      const nextElement = event.target.nextElementSibling;
      nextElement.classList.toggle('spoiler-content_active');
   } else {
      const spoilerBtn = event.target.closest('.spoiler-open-btn');
      spoilerBtn.classList.toggle('spoiler-open-btn_active');
      spoilerBtn.nextElementSibling.classList.toggle('spoiler-content_active')
   }
   // if (nextElement.classList.contains('spoiler-content')) {
   //    nextElement.classList.toggle('spoiler-content_active');
   // }
};