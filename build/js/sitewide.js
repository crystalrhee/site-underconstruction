// Basic JS function based setup, will most likely be changed later
//	on with something like React, but for now put all page-specific
//	functions into there respective functions below (people_page, gifs_page, etc.)

// Everything is housed within the SITE object.
// Call all functions inside by referring back to SITE
//	example: to call gifs_page call SITE.gifs_page();
//	You *could* technically call this.gifs_page(); but lets
//	just use SITE for now since these will all be refactored
//	later into new functions.x

var SITE = {
	
	/* Globals Variables
	=============================================*/	

	/* Methods
	=============================================*/	
	init: function(){

		$(window).scroll(function(e){
			SITE.functions.scroll();
		});

		$(window).bind('scroll', function() {
			SITE.functions.fix_nav();
		})
	},
	
	functions: {
		scroll: function() {
			var scrolled = $(window).scrollTop();
			$('#parallax-bg-1').css('top',(0-(scrolled*.05))+'px');
			$('#parallax-bg-2').css('top',(0-(scrolled*1))+'px')
			$('#parallax-bg-3').css('top',(0-(scrolled*2))+'px');
		},

		fix_nav: function() {
			var navHeight = $(window).height() - 65;
			if ($(window).scrollTop() > navHeight) {
				$('ul.nav-links').addClass('fixed');
				console.log("ADDED");
			} else {
				$('ul.nav-links').removeClass('fixed');
			}
		}
	}
};

$(window).on('load', function() {
	SITE.init();
});