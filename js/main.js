$(document).ready(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

  
    
    // scroll to top button fade
    $(function() {
        var offset = 250;
        var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.scroll-top').fadeIn(duration);
        } else {
            $('.scroll-top').fadeOut(duration);
        }
    });
    $('.scroll-top').click(function(event) {
        event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
        return false;
        });
    });
})(jQuery);


/* Google Analytics */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78494498-1', 'auto');
  ga('send', 'pageview');


