$(document).ready(function() {
    // Cache selectors
    const $window = $(window);
    const $nav = $('nav');
    const $navItemsA = $('.nav-items a');
    const $mobileUlLiA = $('.mobile ul li a');
    const $mobileUl = $('.mobile ul');
    const $hamburger = $('#hamburger');

    // check screen size to show hamburger menu
    function checkWidth() {
        if ($window.width() < 514) {
            $nav.removeClass('flex-column').addClass('d-flex justify-content-between align-items-top');
        } else {
            $nav.removeClass('d-flex justify-content-between align-items-top').addClass('flex-column');
        }
    }
    checkWidth();
    $window.resize(checkWidth);

    // toggle active on click
    $(document).on('click', '.nav-items a', function() {
        $navItemsA.removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.mobile ul li a', function() {
        $mobileUlLiA.removeClass('active');
        $(this).addClass('active');
    });

    // Smooth scroll for anchor links
    $('a[href*=\\#]').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').stop().animate(
                { scrollTop: $(target).offset().top },
                600,
                function() {
                    location.hash = target;
                }
            );
        }
        return false;
    });

    // Assign active class to nav links while scrolling
    $window.scroll(function() {
        const scrollDistance = $window.scrollTop() + 100;
        $('.page-section').each(function(i) {
            if ($(this).position().top < scrollDistance) {
                $navItemsA.removeClass('active');
                $navItemsA.eq(i).addClass('active');
            }
        });
    }).scroll();

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
    $hamburger.click(function(){
        $(this).toggleClass('open');
        $nav.toggleClass('overlay');
        $mobileUl.toggle();
    });

    $mobileUlLiA.on('click', function(){
        $hamburger.toggleClass('open');
        $mobileUl.hide();
        $nav.toggleClass('overlay');
    });

    // playground code
    document.body.onmousemove = function(e) {
        document.documentElement.style.setProperty('--x', (e.clientX) + 'px');
        document.documentElement.style.setProperty('--y', (e.clientY) + 'px');
    };

    // Preview images on hover
    const workItems = document.querySelectorAll('#projects ul li');
    const preview = document.querySelectorAll('#preview-img img');
    workItems.forEach((item, i) => {
        item.addEventListener('mouseover', () => { 
            preview[i].classList.add('visible');
            preview[i].style.opacity = 1;
        });
        item.addEventListener('mouseleave', () => {
            preview[i].classList.remove('visible');
            preview[i].style.opacity = 0.1;
        });
        item.addEventListener('mousemove', (e) => {
            preview[i].style.left = (e.clientX -200) + 'px';
            preview[i].style.top = (e.clientY - 600) + 'px';
        });
    });

    // carousel code (uncomment if needed)
    // const $carousel = $('.carousel').flickity({
    //     imagesLoaded: true,
    //     percentPosition: false,
    // });
    // const $imgs = $carousel.find('.carousel-cell img');
    // const docStyle = document.documentElement.style;
    // const transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    // const flkty = $carousel.data('flickity');
    // $carousel.on('scroll.flickity', function() {
    //     flkty.slides.forEach(function(slide, i) {
    //         const img = $imgs[i];
    //         const x = (slide.target + flkty.x) * -1/3;
    //         img.style[transformProp] = 'translateX(' + x  + 'px)';
    //     });
    // });
});