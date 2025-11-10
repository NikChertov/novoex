import { Navigation } from "swiper";

const swiperSlider = (() => {
  const heroSlider = new Swiper('.hero-section-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });
  const insightsSlider = new Swiper('.insights-section-slider', {
    slidesPerView: 1,
    speed: 800,
    loop: true,
    centeredSlides: true,
    centerInsufficientSlides: true,
    navigation: {
      prevEl: '.insights-section-btn-prev',
      nextEl: '.insights-section-btn-next'
    }
  });

  const init = () => {};

  return {
    init,
  };
})();
export default swiperSlider;
