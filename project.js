$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      nextArrow:'<i class="fas fa-chevron-right next_Arrow"></i>',
      prevArrow:'<i class="fas fa-chevron-left prev_Arrow"></i>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
             slidesToShow: 2,
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  let burger = document.getElementById('burger');
  let menu = document.querySelector('.menu');
  let menuItem = document.getElementsByClassName('menu__item');

  burger.addEventListener('click', menuActive);
  function menuActive() {
    menu.classList.toggle('menu-active');
  }
  
  for ( let i = 0;  i < menuItem.length; i++) {
    menuItem[i].addEventListener('click',  closeMenu)
  }
  function closeMenu () {
    menu.classList.remove('menu-active');
  }
  