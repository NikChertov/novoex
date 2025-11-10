// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import swiperSlider from './temp-modules/slider';
import choose from './temp-modules/choose';
import burgerMenu from './temp-modules/burger-menu';

(($) => {
  // When DOM is ready
  $(() => {
    swiperSlider.init();
    choose.init();
    burgerMenu.init();
  });
})(jQuery);
