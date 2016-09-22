jQuery(document).ready(function($){

// open/close primary navigation
$('.primary-nav-trigger').on('click', function() {
	$('.menu-icon').toggleClass('is-clicked');
	$('.header').toggleClass('menu-is-open');
	
		/* in firefox transitions break when parent overflow is changed, 
		so we need to wait for the end of the trasition to give the body 
		an overflow hidden */
		
		if( $('.primary-nav').hasClass('is-visible') ) {
			$('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
		}
	});
});