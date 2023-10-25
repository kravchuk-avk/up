$(function(){


// $('.header__btn, .header__link').on('click', function (event) {
//   $('.header__btn,.header__line,.header__list, .header__link').toggleClass('header__btn--active');

//   $('body').toggleClass('body__lock');

// });

// $(".logo, .header__link, .header__icon").on("click", function (event) {
//   event.preventDefault();
//   var id  = $(this).attr('href'),
//     top = $(id).offset().top;
//   $('body,html').animate({scrollTop: top}, 1000);
// });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollPos= 100;
  let header = document.querySelector('.header');

if(document.body.scrollTop > scrollPos ||
  document.documentElement.scrollTop > scrollPos) {
  header.classList.add('header--active');
} else {
header.classList.remove('header--active');
}
}

  var mixer = mixitup('.categories__product-list');

});