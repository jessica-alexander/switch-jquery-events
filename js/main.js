$(document).on('ready', function() {

  $('.switch').on('click', function() {
    $('button').toggleClass('on off')

  if ( $('button').hasClass('on') ) {
    $('.status').text("It's so bright in here!");
  } else {
    $('.status').text("Hey, who turned off the lights?");
  }

    $('body').toggleClass('light dark');


  })
});
