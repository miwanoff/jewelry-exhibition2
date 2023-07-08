const slides = [
  "images/jewelry1.png",
  "images/jewelry2.png",
  "images/jewelry3.png",
  "images/jewelry4.png",
  "images/jewelry5.png",
  "images/jewelry3.png",
  "images/jewelry4.png",
];

$(function () {
  $.each(slides, function (index, src) {
    let item = `<div  class="item" style="background: url(${src});"></div>`;
    $(".owl-carousel.owl-theme").append(item);
  });

  $(window).scroll(function () {
    // якщо відбувається скролінг
    $(".slideanim").each(function () {
      // для кожного блоку з класом slideanim
      let pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера
      if (pos < $(window).scrollTop() + 400) {
        //якщо до верху сторінки залишається 400px,
        $(this).addClass("slide"); //додаємо до блоку клас slide з анімацією
      }
    });
  });
});
