$(function(){


// $('.header__btn, .header__link').on('click', function (event) {
//   $('.header__btn,.header__line,.header__list, .header__link').toggleClass('header__btn--active');

//   $('body').toggleClass('body__lock');

// });

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
    var slider = $('.slider');

$('.slider').slick({
  dots: true,
  arrows: true,
  appendArrows: $('.slider__nav'),
  prevArrow: '<button class="slider__btn-prev" type="button"> <svg class="slider__icon slider__icon--prev-arrow" width="19" height="11"> <use href="images/icon/prevarrow.svg#icon-prevarrow"> </use> </svg> <span class="sr-only">Попередній відгук</span> </button>',
  appendDots: $('.slider__nav'),
  nextArrow: '<button class="slider__btn-next" type="button"><svg class="slider__icon slider__icon--next-arrow" width="19" height="11"><use href="images/icon/nextarrow.svg#icon-nextarrow""></use></svg> <span class="sr-only">Попередній відгук</span></button>',
  fade: true,
  autoplay: true,
  autoplaySpead: 2000
});

slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var $prevBtn = $('.slider__btn-prev');
  var $nextBtn = $('.slider__btn-next');

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

  var mixer = mixitup('.categories__product-list');

});