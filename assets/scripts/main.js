$(document).ready(function() {

        // check screen size to show hamburger menu
        function checkWidth() {
                if ($(window).width() < 514) {
                        $('nav').removeClass('flex-column').addClass('d-flex').addClass('justify-content-between').addClass('align-items-top');
                } else {
                        $('nav').removeClass('d-flex').removeClass('justify-content-between').removeClass('align-items-top').addClass('flex-column');
                }
        }
        checkWidth();
        $(window).resize(checkWidth);

        // toggle active on click
        $(document).on('click', '.nav-items a', function() {
                $('.nav-items a').removeClass('active');
                $(this).addClass('active');
        });

        $(document).on('click', '.mobile ul li a', function() {
                $('.mobile ul li a').removeClass('active');
                $(this).addClass('active');
        });

        $(document).ready(function() {
                $('a[href*=#]').bind('click', function(e) {
                        e.preventDefault(); // prevent hard jump, the default behavior

                        const target = $(this).attr('href'); // Set the target as variable

                        // perform animated scrolling by getting top-position of target-element and set it as scroll target
                        $('html, body')
                                .stop()
                                .animate(
                                        {
                                                scrollTop: $(target).offset().top,
                                        },
                                        600,
                                        function() {
                                                // eslint-disable-next-line no-restricted-globals
                                                location.hash = target; // attach the hash (#jumptarget) to the pageurl
                                        }
                                );

                        return false;
                });
        });

        $(window)
                .scroll(function() {
                        const scrollDistance = $(window).scrollTop() + 100;

                        // Assign active class to nav links while scolling
                        $('.page-section').each(function(i) {
                                if ($(this).position().top < scrollDistance) {
                                        $('.nav-items a.active').removeClass('active');
                                        $('.nav-items a')
                                                .eq(i)
                                                .addClass('active');
                                }
                        });
                })
                .scroll();

        // loop array of colors on hover
        // const colors = ['#fff5f5', '#fff6e8', '#fff9db', '#f0fffa', '#ebf5ff', '#f1f0ff'];
        // $('.wrap').hover(
        //         function() {         
        //                 $(this).css('background-color', colors[(Math.random() * colors.length) | 0]);
        //         },
        //         function() {
        //                 $(this).css('background-color', '');
        //         }
        // );

        // clipboard.js
        const clipboard = new ClipboardJS('.clipboard');
        clipboard.on('success', function(e) {
                console.log('copied!');
                $('#copy').tooltip('show');
        });

        clipboard.on('error', function(e) {
                console.log(e);
        });



        // hamburger interaction
        $('#hamburger').click(function(){
                $(this).toggleClass('open');
                $('nav').toggleClass('overlay');
                $('.mobile ul').toggle('display');
        });

        $('.mobile ul li a').on('click', function(){
                $('#hamburger').toggleClass('open');
                $('.mobile ul').hide();
                $('nav').toggleClass('overlay');
        });
 
        // playground code
        document.body.onmousemove = function(e) {
                document.documentElement.style.setProperty('--x',(e.clientX)+'px');
                document.documentElement.style.setProperty('--y',(e.clientY)+'px');
        }

        const workItems = document.querySelectorAll('#projects ul li');
        const preview = document.querySelectorAll('#preview-img img');

        workItems.forEach((h4, i) => {
                h4.addEventListener('mouseover', () => { 
                        preview[i].classList.add('visible');
                        preview[i].style.opacity = 1;
                });
                h4.addEventListener('mouseleave', () => {
                        preview[i].classList.remove('visible');
                        preview[i].style.opacity = 0.1;
                });
                h4.addEventListener('mousemove', (e) => {
                        preview[i].style.left = e.clientX  - 200 + 'px';
                        preview[i].style.top = e.clinetY + 'px';
                });
        });

        // carousel code
        // var $carousel = $('.carousel').flickity({
        //         imagesLoaded: true,
        //         percentPosition: false,
        // });

        // var $imgs = $carousel.find('.carousel-cell img');
        // // get transform property
        // var docStyle = document.documentElement.style;
        // var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
        // // get Flickity instance
        // var flkty = $carousel.data('flickity');

        // $carousel.on( 'scroll.flickity', function() {
        //         flkty.slides.forEach( function( slide, i ) {
        //                 var img = $imgs[i];
        //                 var x = ( slide.target + flkty.x ) * -1/3;
        //                 img.style[ transformProp ] = 'translateX(' + x  + 'px)';
        //         });
        // });


});

