$(document).ready(function () {
  $( ".swap-trigger" ).click(function() {
    $(this).closest(".project").toggleClass("swap-info");
  }),
  $("nav li").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
  }),
  $('.link__top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  }),
  $('.link__projects').click(function() {
    $('html, body').animate({
      scrollTop: $("#section__projects").offset().top - 100
    }, 1000)
  }),
  $('.link__timeline').click(function() {
    $('html, body').animate({
      scrollTop: $("#section__timeline").offset().top - 100
    }, 1000)
  }),
  $('.link__contact').click(function() {
    $('html, body').animate({
      scrollTop: $("#section__contact").offset().top - 100
    }, 1000)
  })
});

$('.gallery').flickity({
  cellAlign: 'left',
  contain: false,
});