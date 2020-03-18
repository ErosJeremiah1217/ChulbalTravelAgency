$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('solid');
  } else {
    $('nav').removeClass('solid');
  }
});