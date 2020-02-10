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

    // toggle active
    $(document).on('click', '.nav-items a', function() {
        $(".nav-items a").removeClass("active");
        $(this).addClass("active");
    });

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