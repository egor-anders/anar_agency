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



const modals = document.querySelectorAll('.modal');
const triggers = document.querySelectorAll('[data-toggle]');
modals.forEach((modal) => {
  const modalClose = modal.querySelector('.modal__cross');

  function hideModal() {
    modal.classList.remove('modal--active');
    document.querySelector('html').classList.remove('no-scroll');
  }

  modalClose.addEventListener('click', () => {
    hideModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      hideModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hideModal();
    }
  });
});

triggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (trigger.getAttribute('data-toggle') == 'smm') {
      document.querySelector('.modal--smm').classList.add('modal--active');
      setTimeout(()=> {
        ItcSlider.getOrCreateInstance('.slider--smm');
      }, 200);
      document.querySelector('html').classList.add('no-scroll');
    } 
  });
});

console.log(document.querySelectorAll('.switch.disabled'));

document.querySelectorAll('.switch.disabled').forEach((i) => i.addEventListener('click', (e) => e.stopPropagation()));