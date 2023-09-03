(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const bodyBg =document.querySelector("[data-burger]");
  const burgerLinks=document.querySelectorAll(".mobile-menu .nav-list-link .link")

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    bodyBg.classList.toggle("visually-hidden");

 };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);


  burgerLinks.forEach((burgerIteam)=> {
    burgerIteam?.addEventListener('click', toggleMenu)
  })


  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });

})();

// no scroll

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-open-menu').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document
        .querySelectorAll('body')
        .forEach(target => target.classList.add('no-scroll'));
    });
  });

  document.querySelectorAll('.js-close-menu').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document
        .querySelectorAll('body')
        .forEach(target => target.classList.remove('no-scroll'));
    });
  });
});