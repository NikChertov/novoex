const CLASS_TITLE = 'accordion__title';
const CLASS_CONTENT = 'accordion__content';
const CLASS_ACTIVE = 'active';
const CLASS_ACCORDION_ALL = 'accordion_all';
const ACCORDION = document.getElementsByClassName('accordion');

const accordion = (() => {
  const accordionInit = () => {
    for (let item = 0; item < ACCORDION.length; item += 1) {
      const contentAccordion = ACCORDION[item].getElementsByClassName(CLASS_CONTENT);
      const titleAccordion = ACCORDION[item].getElementsByClassName(CLASS_TITLE);
      if (ACCORDION[item].classList.contains(CLASS_ACCORDION_ALL)) {
        const showAllAccordion = (toggle) => {
          const currentAccordion = document.getElementById(toggle);
          currentAccordion.classList.toggle(CLASS_ACTIVE);
        };
        for (let i = 0; i < titleAccordion.length; i += 1) {
          titleAccordion[i].addEventListener('click', function () {
            showAllAccordion(this.dataset.accordion);
            this.classList.toggle(CLASS_ACTIVE);
          });
        }
      } else {
        const showAccordion = (toggle) => {
          const currentAccordion = document.getElementById(toggle);
          if (currentAccordion.classList.contains(CLASS_ACTIVE)) {
            currentAccordion.classList.remove(CLASS_ACTIVE);
          } else {
            for (let i = 0; i < contentAccordion.length; i += 1) {
              contentAccordion[i].classList.remove(CLASS_ACTIVE);
            }
            currentAccordion.classList.add(CLASS_ACTIVE);
          }
        };
        for (let i = 0; i < titleAccordion.length; i += 1) {
          titleAccordion[i].addEventListener('click', ({ target }) => {
            showAccordion(target.dataset.accordion);
            if (target.classList.contains(CLASS_ACTIVE)) {
              titleAccordion[i].classList.remove(CLASS_ACTIVE);
            } else {
              for (let j = 0; j < titleAccordion.length; j += 1) {
                titleAccordion[j].classList.remove(CLASS_ACTIVE);
              }
              titleAccordion[i].classList.add(CLASS_ACTIVE);
            }
          });
        }
      }
    }
  };

  const init = () => {
    if (ACCORDION.length > 0) {
      accordionInit();
    }
  };

  return {
    init,
  };
})();

export default accordion;
