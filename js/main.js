$( document ).ready(function() {


// Main menu bar fixing jquery
		var stickyNavTop = $('.main_menu').offset().top;
		var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) { 
		    $('.main_menu').addClass('menu_fix');
		} else {
		    $('.main_menu').removeClass('menu_fix'); 
		}
		};
		stickyNav();
		$(window).scroll(function() {
		    stickyNav();
		});


		$('.main_menu button').click(function(){
			$('.main_menu #navbar').toggleClass('in');
		});
		$(".main_menu ul li").click(function(){
			$('.main_menu #navbar').toggleClass('in');
		});
		$(".main_menu ul li ul li").click(function(){
			$('.main_menu #navbar').toggleClass('in');
		});


	// Gallery Show js
	$("#gallery #all").click(function(){
		$("#gallery .all").show(1000);
		$("#gallery li").removeClass('current');
		$(this).addClass('current');
	})
	$("#gallery #sponsor").click(function(){
		$("#gallery .sponsor").show(1000);
		$("#gallery .medic").hide(1000);
		$("#gallery .relief").hide(1000);
		$("#gallery li").removeClass('current');
		$(this).addClass('current');
	})
	$("#gallery #medic").click(function(){
		$("#gallery .medic").show(1000);
		$("#gallery .sponsor").hide(1000);
		$("#gallery .relief").hide(1000);
		$("#gallery li").removeClass('current');
		$(this).addClass('current');
	})
	$("#gallery #relief").click(function(){
		$("#gallery .relief").show(1000);
		$("#gallery .sponsor").hide(1000);
		$("#gallery .medic").hide(1000);
		$("#gallery li").removeClass('current');
		$(this).addClass('current');
	})

	    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('ul a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });


}

