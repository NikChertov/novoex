const choose = (() => {
  const chooseFunc = () => {
    let selects = document.querySelectorAll('.new-select');
    if(selects) {
      selects.forEach(select => {
        const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: ''
      });
      })
    }
  };

  const init = () => {
    chooseFunc();
  };

  return {
    init,
  };
})();

export default choose;
