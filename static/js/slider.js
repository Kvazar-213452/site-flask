var screen4 = 5;
var screen3 = 7;
var screen2 = 6;

window.onload = function() {
  screenQ()
  screenQ1()
}



 function screenQ() {
    // Ініціалізація Swiper
    var mySwiper = new Swiper('.swiper-container', {
      // Опції вашого слайдера
      slidesPerView: 8, // Кількість слайдів, які відображаються одночасно
      spaceBetween: 5, // Відстань між слайдами
      navigation: {
        nextEl: '.nex',
        prevEl: '.bac',
      },
    });
  }

  function screenQ1() {
    // Ініціалізація Swiper
    var mySwiper = new Swiper('.swiper-container1', {
      // Опції вашого слайдера
      slidesPerView: 6, // Кількість слайдів, які відображаються одночасно
      spaceBetween: -50, // Відстань між слайдами
      navigation: {
        nextEl: '.nex1',
        prevEl: '.bac1',
      },
    });
  }



