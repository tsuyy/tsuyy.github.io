/* eslint-disable no-undef */
/* eslint-disable no-bitwise */
/* eslint-disable no-console */

$(document).ready(function() {
        // on scroll shadow for mobile
        $(window).scroll(function() {
                const scroll = $(window).scrollTop();
                if (scroll > 0) {
                        $('.shadow-onscroll').addClass('active');
                } else {
                        $('.shadow-onscroll').removeClass('active');
                }
        });

        // toggle active on click
        $(document).on('click', '.nav-items a', function() {
                $('.nav-items a').removeClass('active');
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
                        const scrollDistance = $(window).scrollTop();

                        // Assign active class to nav links while scolling
                        $('.page-section').each(function(i) {
                                if ($(this).position().top <= scrollDistance) {
                                        $('.nav-items a.active').removeClass('active');
                                        $('.nav-items a')
                                                .eq(i)
                                                .addClass('active');
                                }
                        });
                })
                .scroll();

        // random bg color on hover
        const colors = ['#DDF9EF', '#BFCDE0', '#dce8f4', '#FFF5C6', '#EAE8FF', '#dce8f4', '#d8d5e7', '#E8FFEE'];
        $('.wrap').hover(
                function() {
                        $(this).css('background-color', colors[(Math.random() * colors.length) | 0]);
                },
                function() {
                        $(this).css('background-color', '');
                }
        );

        // clipboard.js
        const clipboard = new ClipboardJS('.clipboard');

        clipboard.on('success', function(e) {
                console.log('copied!');
                $('#copy').popover('toggle');
        });

        clipboard.on('error', function(e) {
                console.log(e);
        });

        // popover
        $('.popover-dismiss').popover({
                trigger: 'focus',
        });
});
