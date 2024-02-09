$(function(){




// бегунок

var $range = $(".js-range-slider"),
    $inputFrom = $(".range-cost__input--from"),
    $inputTo = $(".range-cost__input--to"),
    instance,
    min = min,
    max = max,
    from = from,
    to = to;

$range.ionRangeSlider({
	skin: "round",
    type: "double",

    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});



$('.burger-button').on('click', function (event) {
  $('.mobile-menu, .burger-button, .burger-button__line').toggleClass('active');

  $('body').toggleClass('lock');
});

$('.filter-button').on('click', function (event) {
  $('.mobile-filter, .filter-button').toggleClass('active');

  $('body').toggleClass('lock');
});



$(".logo, .header__menu-link").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollPos= 50;
  let header = document.querySelector('.header');

if(document.body.scrollTop > scrollPos ||
  document.documentElement.scrollTop > scrollPos) {
  header.classList.add('header--active');
} else {
header.classList.remove('header--active');
}
}



  $(document).ready(function(){
    var slider = $('.reviews__box');

$('.reviews__box').slick({
  dots: true,
  arrows: true,
  // appendArrows: $('.reviews__nav'),
  prevArrow: '<button class="reviews__btn reviews__btn--prev" type="button"> <svg class="reviews__icon reviews__icon--prev-arrow" width="19" height="11"> <use href="images/icon/ico.svg#icon-prevarrow"> </use> </svg> <span class="sr-only">Попередній відгук</span> </button>',
  // appendDots: $('.reviews__nav'),
  nextArrow: '<button class="reviews__btn reviews__btn--next" type="button"><svg class="reviews__icon reviews__icon--next-arrow" width="19" height="11"><use href="images/icon/ico.svg#icon-nextarrow"></use></svg> <span class="sr-only">Наступний відгук</span></button>',
  fade: true,
  // autoplay: true,
  autoplaySpeed: 2000,


  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    }
  ]
});

slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var $prevBtn = $('.reviews__btn--prev');
  var $nextBtn = $('.reviews__btn--next');

  if (nextSlide === 0) {
    $prevBtn.prop('disabled', true);
  } else {
    $prevBtn.prop('disabled', false);
  }

  if (nextSlide === slick.slideCount - 1) {
    $nextBtn.prop('disabled', true);
  } else {
    $nextBtn.prop('disabled', false);
  }
});

});


// Функция для инициализации слайдера в секции "restaurant"
function initRestaurantSlider() {
  $('.restaurant__list, .promo__list').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });
}

// Проверяем условие с помощью matchMedia
if (window.matchMedia('(max-width: 767px)').matches) {
  // Запускаем слайдер только для широких экранов
  initRestaurantSlider();
}

// Добавляем слушателя для отслеживания изменений состояния экрана
window.matchMedia('(max-width: 767px)').addListener(function (event) {
  if (event.matches) {
    // Если экран становится широким, инициализируем слайдер
    initRestaurantSlider();
  } else {
    // Если экран становится узким, уничтожаем слайдер
    $('.restaurant__list, .promo__list').slick('unslick');
  }
});



  var mixer = mixitup('.categories__product-list');

});

$('.select-style').styler();