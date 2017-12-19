// Basic JS function based setup, will most likely be changed later
// on with something like React, but for now put all page-specific
// functions into there respective functions below (people_page, gifs_page, etc.)

// Everything is housed within the SITE object.
// Call all functions inside by referring back to SITE
// example: to call gifs_page call SITE.gifs_page();
// You *could* technically call this.gifs_page(); but lets
// just use SITE for now since these will all be refactored
// later into new functions.

var SITE = {
	
	/* Globals Variables
	=============================================*/	

	/* Methods
	=============================================*/	
	init: function(){

		$(window).on('scroll', function(e){
			SITE.functions.scroll();
			SITE.functions.fix_nav();
			e.preventDefault();
		});
		$('header .menu').on('click', function(e) {
			if($('header').hasClass('open')) {
				$('header').removeClass('open');
			} else {
				$('header').addClass('open');
			}
			e.preventDefault();
		});
		$('.nav-links').on('click', function() {
			$('header').removeClass('open');
		});
		$('.scroll').on('click', function(e) {
			setTimeout(function() {
				var hashURL = window.location.hash.split('/');
				var activeClass = '.' + hashURL[2];
				if (hashURL[1]=='scroll') {
					SITE.functions.scroll_to(hashURL[2]);
					$('.active').removeClass('active');
					$(activeClass).addClass('active');
				}
			}, 200);
		});

		$('.map ul li').hover(
			function () {$(this).addClass('animate');}, 
			function () {$(this).removeClass('animate');});

	},

	functions: {
		scroll: function() {
			var scrolled = $(window).scrollTop();
			$('#parallax-bg-1').css('top',(0-(scrolled*.05))+'px');
			$('#parallax-bg-2').css('top',(0-(scrolled*1))+'px')
			$('#parallax-bg-3').css('top',(0-(scrolled*2))+'px');
		},
		scroll_to: function(scroll_place) {
			var target=$('#' + scroll_place);
			$('html, body').animate({
				scrollTop: target.offset().top - 80
			}, 1000);
			return false;
		},
		fix_nav: function() {
			var navHeight = $(window).height() - 50;
			if ($(window).scrollTop() > navHeight) {
				$('ul.nav-links').addClass('fixed');
			} else {
				$('ul.nav-links').removeClass('fixed');
			}
		}
	}
};

$(window).on('load', function() {
	SITE.init();
});