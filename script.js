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

    // Якщо проскролювали більше, ніж на 200px
    if ($(window).scrollTop() > 200) {
      $("#totop").css("opacity", "0.8"); // непрозорість відновлюється
      $(".navbar").css("opacity", "0.6");
    } else {
      $("#totop").css("opacity", "0"); // елемент прозорий
      $(".navbar").css("opacity", "1");
    }

    /* Скролювати фонові шари з різною швидкістю*/
    // $("#hero-section").css(
    //   "background-position",
    //   "center " + -($(window).scrollTop() * 0.5 + 120) + "px"
    // );

    $(".mov_slideInRight").each(function () {
      // для кожного блоку с класом mov_slideInRight
      var pos = $(this).offset().top; // зчитуємо його координату по осі Y у вікні браузера
      if (pos < $(window).scrollTop() + 600) {
        //якщо до верху сторінки залишається 600px,
        $(this).addClass("animate__animated animate__slideInRight"); // додаємо до блоку клас з анімацією slideInRight
      }
    });
  });
});
