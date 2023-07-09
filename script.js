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

  $(".phone").mask("+38 (999)-999-9999", {
    autoсlear: false,
  });

  // const scriptURL = 'https://script.google.com/macros/s/AKfycbx5jA5nKfg31oTek13-00Ig3B8O4Fqyk6bLvFRdAft84f5ACUI6Q5Rasiiz3brOyF_l/exec';
  // const form = document.forms['submit-to-google-sheet']

  // form.addEventListener('submit', e => {
  //     e.preventDefault()
  //     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  //         .then(response => { alert('Success!') })
  //         .catch(error => { alert('Error!') })
  // })

  const formModal = document.forms["submit-to-google-sheet-modal"];
  sendDataToGoogleSheet(formModal);
  const form = document.forms["submit-to-google-sheet"];
  sendDataToGoogleSheet(form);

  function sendDataToGoogleSheet(form) {
    // formSel = "#" + form.id + " #time";
    // console.log(formSel);
    // var timeField = document.querySelector(formSel);
    // var date = Date.now();
    // timeField.value = date;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(form.action, {
        method: "Post",
        body: new FormData(form),
      })
        .then((response) => {
          // response.json();
          $("#registration-modal").modal("hide");
          $("#confirm-modal").modal("show");
          //alert("!!!");
          form.reset();
        })

        .catch((error) => {
          $("#registration-modal").modal("hide");
          $("#error-modal").modal("show");
          //alert("error!");
          form.reset();
        });
    });
  }
});
