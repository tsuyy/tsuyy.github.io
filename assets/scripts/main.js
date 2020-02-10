$( document ).ready(function() {
    // on scroll shadow for mobile
    $(window).scroll(function() {     
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".shadow-onscroll").addClass("active");
        }
        else {
            $(".shadow-onscroll").removeClass("active");
        }
    });

    // toggle active on click
    $(document).on('click', '.nav-items a', function() {
        $(".nav-items a").removeClass("active");
        $(this).addClass("active");
    });

    $(document).ready(function() {
		$('a[href*=\\#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
    });

    $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop();
        
            // Assign active class to nav links while scolling
            $('.page-section').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                            $('.nav-items a.active').removeClass('active');
                            $('.nav-items a').eq(i).addClass('active');
                    }
            });
    }).scroll();

    // changing colors based on mousemove
    // var $win = $(window),
    // w = 0,h = 0,
    // rgb = [],
    // getWidth = function() {
    //     w = $win.width();
    //     h = $win.height();
    // };

    // $win.resize(getWidth).mousemove(function(e) {
        
    //     rgb = [
    //         Math.round(e.pageX/w * 255),
    //         Math.round(e.pageY/h * 255),
    //         180
    //     ];
        
    //     $('span.dot').css({"background-color": 'rgb('+rgb.join(',')+')'});
       
    // }).resize();

    // clipboard.js
    var clipboard = new ClipboardJS('.clipboard');

    clipboard.on('success', function(e) {
        console.log('copied!');
        $('#copy').popover('toggle');
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });

    // popover
    $('.popover-dismiss').popover({
        trigger: 'focus'
      })

  });