const slides = [
  "images/jewelry1.png",
  "images/jewelry2.png",
  "images/jewelry3.png",
  "images/jewelry4.png",
  "images/jewelry5.png",
];

$(function () {
  $.each(slides, function (index, src) {
    let item = `<div  class="item" style="background: url(${src});"></div>`;
    $(".owl-carousel.owl-theme").append(item);
  });
});
