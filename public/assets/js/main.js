$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');
        }
    });
    
    let scrollPosition = 0;
    let isMenuOpen = false;
    let wasSticky = false;
    
    // Handle offcanvas toggle
    $('.navbar-toggler').on('click', function() {
        const $body = $('body');
        const $html = $('html');
        const $header = $('.main-header');
        if (!isMenuOpen) {
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            wasSticky = $header.hasClass('sticky');
            $html.css('overflow', 'hidden');
            if (wasSticky) {
                $header.addClass('sticky');
            }
            isMenuOpen = true;
            
            // Reset animations for smooth replay
            setTimeout(() => {
                $('.offcanvas .nav-link').css('animation', 'none');
                $('.offcanvas .login-btn').css('animation', 'none');
                $('.offcanvas-title').css('animation', 'none');
                $('.btn-close').css('animation', 'none');
                
                // Force reflow (guard: offcanvas markup may be absent on some layouts)
                var firstNav = $('.offcanvas .nav-link')[0];
                if (firstNav) firstNav.offsetHeight;
                
                // Restart animations
                $('.offcanvas .nav-link').css('animation', '');
                $('.offcanvas .login-btn').css('animation', '');
                $('.offcanvas-title').css('animation', '');
                $('.btn-close').css('animation', '');
            }, 50);
        } else {
            $body.css({
                'position': '',
                'top': '',
                'width': '',
                'overflow': ''
            });
            $html.css('overflow', '');
            setTimeout(() => {
                window.scrollTo(0, scrollPosition);
            }, 10);
            isMenuOpen = false;
        }
    });
    
    // Close offcanvas when navigation links are clicked with smooth animation
    $('.offcanvas .navbar-nav .nav-link').on('click', function() {
        if (isMenuOpen) {
            const $this = $(this);
            
            // Add click animation
            $this.css({
                'transform': 'translateX(10px)',
                'opacity': '0.5'
            });
            
            // Hide offcanvas after brief delay for animation effect
            setTimeout(() => {
                const offcanvasElement = document.getElementById('navbarOffcanvas');
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) {
                    offcanvas.hide();
                }
            }, 150);
            
            // Restore body scroll after animation completes
            setTimeout(() => {
                $('body').css({
                    'position': '',
                    'top': '',
                    'width': '',
                    'overflow': ''
                });
                $('html').css('overflow', '');
                window.scrollTo(0, scrollPosition);
                isMenuOpen = false;
            }, 400);
        }
    });
    
    // Handle login button click with smooth animation
    $('.offcanvas .login-btn').on('click', function() {
        if (isMenuOpen) {
            const $this = $(this);
            
            // Add click animation
            $this.css({
                'transform': 'translateY(-5px) scale(0.95)',
                'opacity': '0.7'
            });
            
            // Hide offcanvas after brief delay
            setTimeout(() => {
                const offcanvasElement = document.getElementById('navbarOffcanvas');
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) {
                    offcanvas.hide();
                }
            }, 200);
            
            // Restore body scroll after animation completes
            setTimeout(() => {
                $('body').css({
                    'position': '',
                    'top': '',
                    'width': '',
                    'overflow': ''
                });
                $('html').css('overflow', '');
                window.scrollTo(0, scrollPosition);
                isMenuOpen = false;
            }, 450);
        }
    });
    
    // Handle offcanvas hidden event
    $('#navbarOffcanvas').on('hidden.bs.offcanvas', function() {
        if (isMenuOpen) {
            $('body').css({
                'position': '',
                'top': '',
                'width': '',
                'overflow': ''
            });
            $('html').css('overflow', '');
            setTimeout(() => {
                window.scrollTo(0, scrollPosition);
            }, 10);
            isMenuOpen = false;
        }
    });
    
    // Handle offcanvas showing event for smooth entrance
    $('#navbarOffcanvas').on('show.bs.offcanvas', function() {
        // Add backdrop blur effect
        $('.offcanvas-backdrop').addClass('backdrop-blur');
    });
    
    // Handle screen resize to hide offcanvas on desktop
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const windowWidth = $(window).width();
            
            // Hide offcanvas when transitioning to desktop (1200px and above)
            if (windowWidth >= 1200) {
                const offcanvasElement = document.getElementById('navbarOffcanvas');
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                
                if (offcanvas) {
                    offcanvas.hide();
                }
                
                // Remove any backdrop
                $('.offcanvas-backdrop').remove();
                
                // Restore body scroll if menu was open
                if (isMenuOpen) {
                    $('body').css({
                        'position': '',
                        'top': '',
                        'width': '',
                        'overflow': ''
                    });
                    $('html').css('overflow', '');
                    isMenuOpen = false;
                }
            }
        }, 250); // Debounce resize event
    });
    
    // Handle regular navbar collapse for larger screens
    $('.navbar-collapse').on('hidden.bs.collapse', function() {
        if (isMenuOpen) {
            $('body').css({
                'position': '',
                'top': '',
                'width': '',
                'overflow': ''
            });
            $('html').css('overflow', '');
            setTimeout(() => {
                window.scrollTo(0, scrollPosition);
            }, 10);
            isMenuOpen = false;
        }
    });
});
$(document).ready(function() {
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: ['<img src="assets/img/icons/right-arrow.png" class="next-icon" alt="prev">',
            '<img src="assets/img/icons/right-arrow.png" class="prev-icon" alt="next">'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    });
    
    // Banner Slider Functionality
    let currentSlide = 0;
    const slides = $('.slide');
    const indicators = $('.indicator');
    const totalSlides = slides.length;
    let autoSlideInterval;
    
    // Initialize slider
    function initSlider() {
        showSlide(0);
        startAutoSlide();
    }
    
    // Show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.removeClass('active');
        indicators.removeClass('active');
        
        // Show current slide
        slides.eq(index).addClass('active');
        indicators.eq(index).addClass('active');
        
        // Reset animations for content
        const currentSlideElement = slides.eq(index);
        const content = currentSlideElement.find('.banner-content');
        content.css('animation', 'none');
        
        // Force reflow (guard: slide may lack .banner-content on some pages)
        if (content[0]) content[0].offsetHeight;
        
        // Restart animations
        content.css('animation', '');
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        showSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
    }
    
    // Start automatic slide rotation
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    // Stop automatic slide rotation
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event handlers for controls
    $('#sliderNext').on('click', function() {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    $('#sliderPrev').on('click', function() {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    // Event handlers for indicators
    $('.indicator').on('click', function() {
        const slideIndex = $(this).data('slide');
        stopAutoSlide();
        showSlide(slideIndex);
        startAutoSlide();
    });
    
    // Pause on hover
    $('.banner-slider').on('mouseenter', function() {
        stopAutoSlide();
    });
    
    $('.banner-slider').on('mouseleave', function() {
        startAutoSlide();
    });
    
    // Keyboard navigation
    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    $('.banner-slider').on('touchstart', function(e) {
        touchStartX = e.originalEvent.touches[0].clientX;
    });
    
    $('.banner-slider').on('touchend', function(e) {
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            } else {
                // Swipe right - previous slide
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            }
        }
    }
    
    // Initialize slider when DOM is ready
    initSlider();
});
