const POPUP_SHOW = document.querySelectorAll('.show-popup');
const POPUPS = document.querySelectorAll('.popup');
const OVERLAY = document.querySelector('.js-overlay');
const HTML = document.getElementsByTagName('html')[0];
const CLOSE_BTN = document.querySelectorAll('.js-popup-close');

const CLASS_ACTIVE = 'active';
const CLASS_NOSCROLL = 'noscroll';

const popups = (() => {
  const hidePopup = () => {
    OVERLAY.classList.remove(CLASS_ACTIVE);
    HTML.classList.remove(CLASS_NOSCROLL);
    for (let i = 0; i < POPUPS.length; i += 1) {
      if (POPUPS[i].classList.contains('active')) {
        POPUPS[i].classList.remove(CLASS_ACTIVE);
      }
    }
  };
  const showPopup = (target) => {
    OVERLAY.classList.add(CLASS_ACTIVE);
    HTML.classList.add(CLASS_NOSCROLL);
    const currentPopup = document.getElementById(target);
    currentPopup.classList.add(CLASS_ACTIVE);
  };
  const showPopupInit = () => {
    if (POPUP_SHOW !== null) {
      for (let i = 0; i < POPUP_SHOW.length; i += 1) {
        POPUP_SHOW[i].addEventListener('click', function (event) {
          showPopup(this.dataset.popup);
        });
      }
    }
    if (OVERLAY !== null) {
      OVERLAY.addEventListener('click', (event) => {
        hidePopup();
      });
    }
    if (CLOSE_BTN !== null) {
      for (let i = 0; i < CLOSE_BTN.length; i += 1) {
        CLOSE_BTN[i].addEventListener('click', (event) => {
          hidePopup();
        });
      }
    }
  };

  const init = () => {
    if (POPUPS.length > 0) {
      showPopupInit();
    }
  };

  return {
    init,
    showPopup,
  };
})();

export default popups;
