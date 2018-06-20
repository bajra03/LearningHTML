$(document).scroll(function() {
  if ($(this).scrollTop() > 90) { //Adjust 150
    $('#navbar').addClass('navbar-white');
  } else {
    $('#navbar').removeClass('navbar-white');
  }
});