var acc = document.getElementsByClassName('accordion__button');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('accordion__button--active');
    this.parentNode.parentNode.classList.toggle('accordion__item--active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      // panel.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'center'
      // });
    }
  });
}

const mobileButton = document.querySelector('.header__menu-btn');
const mobileMenu = document.querySelector('.menu');
const mobileCross = document.querySelector('.menu__cross');
const menuLinks = document.querySelectorAll('.menu__item');

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.add('menu--active');
  document.querySelector('html').classList.add('no-scroll');
});

function closeMenu() {
  mobileMenu.classList.remove('menu--active');
  document.querySelector('html').classList.remove('no-scroll');
}

mobileCross.addEventListener('click', () => {
  closeMenu(); 
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu(); 
  });
});
