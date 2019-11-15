$( document ).ready(function() {
    $(window).scroll(function() {     
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".shadow-onscroll").addClass("active");
        }
        else {
            $(".shadow-onscroll").removeClass("active");
        }
    });

    var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

    $win.resize(getWidth).mousemove(function(e) {
        
        rgb = [
            Math.round(e.pageX/w * 255),
            Math.round(e.pageY/h * 255),
            180
        ];
        
        $('span.dot').css({"background-color": 'rgb('+rgb.join(',')+')'});
       
    }).resize();

  });