$(document).ready(function() {
  "use strict";

  var app = {};

  app.init = function() {
    app.pageScroll();
    app.scrollTopBtn();
    app.buttonFade();
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
      $('.navbar-toggle:visible').click();
    });
  };

  // Page scrolling - requires jQuery Easing plugin
  app.pageScroll = function() {
    $('.page-scroll a').bind('click', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      e.preventDefault();
    });
  };

	// Scroll to top of the page button
  app.scrollTopBtn = function() {
    // scroll to top button fade
    app.offset = 250;
    app.duration = 300;

		$(window).scroll(function() {
      if ($(this).scrollTop() > app.offset) {
        $('.scroll-top').fadeIn(app.duration);
      } else {
        $('.scroll-top').fadeOut(app.duration);
      }
    });
  };

	// Scroll to top of the page button fade on scroll up
	app.buttonFade = function() {
  $('.scroll-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, app.duration);
    return false;
  });
};

  app.init();
});
