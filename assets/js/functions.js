$(function() {
	smoothScroll(750);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	       $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - $('.main_h').outerHeight()
            }, 400);
            }
	});
}


 
//FAB CONNECT BUTTON


$('#btn-main').on('touchstart click', function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');         $(this).addClass('reverse-animation');
  } else {
    $(this).removeClass('reverse-animation');
    $(this).addClass('active');
  }
  
  return false;
});




// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});


// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});
