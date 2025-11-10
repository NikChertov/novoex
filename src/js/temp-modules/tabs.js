const ACTIVE = 'active';

const tabs = (() => {
  const tabsUnit = () => {
    const TAB = document.querySelectorAll('.js-tabs-btn');
    for (let i = 0; TAB.length > i; i += 1) {
      const currentTab = TAB[i];
      currentTab.addEventListener('click', (e) => {
        for (let y = 0; TAB.length > y; y += 1) {
          const currentTab = TAB[y];
          const currentTabContent = document.querySelector(`.${currentTab.getAttribute('data-tab')}`);
          currentTab.classList.remove(ACTIVE);
          currentTabContent.classList.remove(ACTIVE);
        }
        e.currentTarget.classList.add(ACTIVE);
        const target = e.currentTarget.getAttribute('data-tab');
        const targetContent = document.querySelector(`.${target}`);
        targetContent.classList.add(ACTIVE);
      });
    }
  };

  const init = () => {
    tabsUnit();
  };

  return {
    init,
  };
})();

export default tabs;
