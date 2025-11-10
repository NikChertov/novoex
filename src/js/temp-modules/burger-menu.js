const burgerMenu = (() => {
  const BURGER = document.querySelector('.js-burger');
  const NAV = document.querySelector('.js-nav');
  const BODY = document.querySelector('body');
  const OVERFLOW = 'overflow';
  const ACTIVE = 'active';

  const burgerFunc = () => {
    BURGER.addEventListener('click', () => {
      BURGER.classList.toggle(ACTIVE);
      NAV.classList.toggle(ACTIVE);
      BODY.classList.toggle(OVERFLOW);
    });
  };

  const init = () => {
    burgerFunc();
  };

  return {
    init,
  };
})();

export default burgerMenu;
