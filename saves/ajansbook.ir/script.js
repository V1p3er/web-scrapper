$(document).ready(function() {
    
    
    
    if ($('.megamenu-overlay').length === 0) {
        $('body').append('<div class="megamenu-overlay"></div>');
    }

    const $categoryBtn = $('#categoryBtn');
    const $megamenuDropdown = $('#megamenuDropdown');
    const $megamenuOverlay = $('.megamenu-overlay');
    const $closeBtn = $('#closeBtn');
    const $categoryItems = $('.category-item');
    const $subcategoriesContents = $('.subcategories-content');

    let hoverTimeout;

    $categoryBtn.on('mouseenter', function() {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function() {
            $megamenuDropdown.addClass('active');
            $categoryBtn.addClass('active');
            $megamenuOverlay.addClass('active');
        }, 200); 
    });

    $categoryBtn.add($megamenuDropdown).on('mouseleave', function(e) {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function() {
            if (!$categoryBtn.is(':hover') && !$megamenuDropdown.is(':hover')) {
                closeMegamenu();
            }
        }, 300);
    });

    $megamenuDropdown.on('mouseenter', function() {
        clearTimeout(hoverTimeout);
    });


    function closeMegamenu() {
        $megamenuDropdown.removeClass('active');
        $categoryBtn.removeClass('active');
        $megamenuOverlay.removeClass('active');
    }

    $categoryItems.each(function() {
        $(this).on('mouseenter', function() {
            $categoryItems.removeClass('active');
            
            $(this).addClass('active');
            
            const category = $(this).data('category');
            
            $subcategoriesContents.removeClass('active');
            
            $('[data-content="' + category + '"]').addClass('active');
        });
    });

    
    $megamenuDropdown.on('click', function(event) {
        event.stopPropagation();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.category, #megamenuDropdown').length) {
            closeMegamenu();
        }
    });

   
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMegamenu();
        }
    });

})

  $(document).ready(function(){
    function resize(){   
        var calculatePadding = parseInt($('.main-header').css("height"));
        
            $(".body-content").css({
                "padding-top": calculatePadding + "px"
            });
        
    }

    resize(); 
    $(window).resize(function(){ 
        resize();
    });
});
  $(document).ready(function(){
    function resize(){   
        var calculatePadding = parseInt($('.main-header').css("height"));
        
            $("#myTab").css({
                "top": calculatePadding + "px"
            });
        
    }

    resize(); 
    $(window).resize(function(){ 
        resize();
    });
});
// ========== Mobile Off-Canvas Menu ==========
$(document).ready(function() {
  
 
  function setDynamicZIndex() {
    $('.submenu').each(function() {
      const level = parseInt($(this).attr('data-level')) || 1;
      const zIndex = 20001 + level;
      $(this).css('z-index', zIndex);
    });
  }
  
  
  function setDynamicPadding() {
    $('.submenu').each(function() {
      const level = parseInt($(this).attr('data-level')) || 1;
      const basePadding = 20;
      const paddingIncrement = 5;
      const padding = basePadding + ((level - 1) * paddingIncrement);
      
      $(this).find('> .submenu-items > .submenu-item > a, > .submenu-items > .submenu-item > .menu-trigger')
             .css('padding-right', padding + 'px');
    });
  }
  
  
  setDynamicZIndex();
  setDynamicPadding();
  

  $('.bar-menu i').on('click', function() {
    $('.off-canvas').addClass('active');
    $('.overlay').addClass('active');
    $('body').css('overflow', 'hidden');
  });
  

  $('.close-btn').on('click', function() {
    $('.off-canvas').removeClass('active');
    $('.overlay').removeClass('active');
    $('.submenu').removeClass('active');
    $('body').css('overflow', 'auto');
  });
  
 
  $(document).on('click', '.menu-trigger', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const $submenu = $(this).siblings('.submenu');
    
    if ($submenu.length) {
      $submenu.addClass('active');
    }
  });
  
 
  $(document).on('click', '.back-btn', function(e) {
    e.stopPropagation();
    $(this).closest('.submenu').removeClass('active');
  });
  

  $('.overlay').on('click', function() {
    $('.off-canvas').removeClass('active');
    $('.overlay').removeClass('active');
    $('.submenu').removeClass('active');
    $('body').css('overflow', 'auto');
  });
  

  $('body').on('click', function(e) {
    const $target = $(e.target);
    
    if (!$target.closest('.off-canvas').length && 
        !$target.closest('.bar-menu i').length) {
      
      $('.off-canvas').removeClass('active');
      $('.overlay').removeClass('active');
      $('.submenu').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
  
});
 // ========== Banner Carousel ==========
 $(document).ready(function(){
            var articlesCarousel = $('.baner-owl').owlCarousel({
                rtl: true,
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                // center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
         navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 1,
                nav: true,

                        
                    }
                    
                  
                }
            });
            
            
         
        });


 // ========== CATEGORY Carousel ==========
 $(document).ready(function(){
    var articlesCarousel = $('.cat-owl').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
    
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
//          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
               
                responsive: {
                    0: {
                        items: 3,
                        
                    },
                      768: {
                        items: 5,
                        
                    },
                     1200: {
                        items: 8,
                        
                    },
                     1600: {
                        items: 11,
                        
                    }
                }
            });
            
            
          
        });


         // ========== CATEGORY Carousel ==========
 $(document).ready(function(){
            var articlesCarousel = $('.sale-owl').owlCarousel({
                rtl: true,
                loop: true,
                margin: 5,
                nav: false,
                dots: false,
            
                // autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
         navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
               
                responsive: {
                    0: {
                        items: 1.3,
                        
                    },
                    768: {
                        items: 3.5,
                        
                    },
                     1200: {
                        items: 5.2,
                nav: true,

                        
                    },
                     1600: {
                        items: 6.2,
                nav: true,

                        
                    },
                    
                  
                }
            });
            
            
          
        });

        
   $(document).ready(function(){

        const owlOptions = {
            loop: true,
            // margin: 30,
            nav: false, 
               navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
            dots: false, 
            rtl: true, 
            responsive:{
                0:{
                    items:2.1
                },
                600:{
                    items:2
                },
                768:{
                    items:3
                },
                1024:{
                    items:6 ,
            nav: true, 

                }
                ,
                1600:{
                    items:7 ,
            nav: true, 

                }
            }
        };

        $('.tab-link').on('click', function(){
            const tabId = $(this).data('tab');

            $('.tab-link').removeClass('active');
            $('.tab-pane').removeClass('active');

            $(this).addClass('active');
            $('#' + tabId).addClass('active');

            const activeCarousel = $('#' + tabId).find('.owl-carousel');
            
           
            if (!activeCarousel.hasClass('owl-loaded')) {
                activeCarousel.owlCarousel(owlOptions);
            }
        });

        $('.tab-pane.active .owl-carousel').owlCarousel(owlOptions);

    });


     $(document).ready(function() {
            var articlesCarousel = $('.most-owl').owlCarousel({
                rtl: true,
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
            
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
             navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
               
                responsive: {
                    0: {
                        items: 1.6,
                        
                    },
                     768: {
                        items: 3.2,
                        
                    },
                    820: {
                        items: 3.5,
                        
                    },
                     991: {
                        items: 4.5,
                        
                    },
                     1200: {
                        items: 6,
                        nav: true,
                        
                    },
                    1600: {
                        items: 7,
                nav: true,

                        
                    },
                    
                  
                }
            });
            
            
            $('.baner-right').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.baner-nav-left').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });
        
        $(document).ready(function() {
            var articlesCarousel = $('.owl-cats').owlCarousel({
                rtl: true,
                nav: false,
                dots: false,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 2.5,
                        
                    },
                    768: {
                        items: 3.5,
                        
                    },
                    820: {
                        items: 4.5,
                        
                    },
                    1200: {
                        items: 8,
                        nav: true,
                    },
                }
            });
            
            
            $('.baner-right').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.baner-nav-left').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });
    
        $(document).ready(function() {
            var articlesCarousel = $('.owl-editors').owlCarousel({
                rtl: true,
                nav: false,
                dots: false,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 2.5,
                        
                    },
                    768: {
                        items: 3.5,
                        
                    },
                    820: {
                        items: 4.5,
                        
                    },
                    1200: {
                        items: 12,
                        nav: true,
                    },
                }
            });
            
            
            $('.baner-right').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.baner-nav-left').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });
        
        $(document).ready(function(){
            $('.baner-carousel').owlCarousel({
                rtl: true,
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                // center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                items: 1,
            });
            $('.baner-right').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.baner-nav-left').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });

        // ========== Blog Section Owl Carousel ==========
$(document).ready(function(){
    var blogOwl = $('.blog-owl').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive: {
            0: {
                items: 1.5,
                
                nav: false,
                dots: true
            },
            576: {
                items: 2,
                dots: true
            },
            768: {
                items: 2,
                dots: true
            },
            992: {
                items: 3,
                dots: false
            },
            1200: {
                items: 4,
                nav: false,
                dots: true
            },
             1600: {
                items: 5,
                nav: false,
                dots: true
            }
        }
    });
});
// ========== Smart Read More / Read Less Functionality ==========
$(document).ready(function() {
    const aboutContent = $('.about-content');
    const readMoreBtn = $('#readMoreBtn');
    const btnText = $('.btn-text');
    const btnIcon = $('.btn-icon');
    
   
    const initialVisibleElements = 2; 
   
    const allElements = aboutContent.children();
    const totalElements = allElements.length;
    
   
    if (totalElements <= initialVisibleElements) {
        readMoreBtn.addClass('hidden');
        return; 
    }
    
  
    function hideExtraElements() {
        allElements.each(function(index) {
            if (index >= initialVisibleElements) {
                $(this).addClass('hidden-element');
            }
        });
    }
    
  
    function showAllElements() {
        allElements.each(function(index) {
            if (index >= initialVisibleElements) {
                const element = $(this);
                setTimeout(function() {
                    element.removeClass('hidden-element').addClass('fade-in');
                }, index * 50); 
            }
        });
    }
    
  
    hideExtraElements();
    
   
    readMoreBtn.on('click', function() {
        const isActive = $(this).hasClass('active');
        
        if (isActive) {
           
            $(this).removeClass('active');
            btnText.text('مشاهده بیشتر');
            
           
            allElements.each(function(index) {
                if (index >= initialVisibleElements) {
                    $(this).addClass('hidden-element').removeClass('fade-in');
                }
            });
            
           
            $('html, body').animate({
                scrollTop: $('.about-section').offset().top - 100
            }, 500);
            
        } else {
           
            $(this).addClass('active');
            btnText.text('مشاهده کمتر');
            
           
            showAllElements();
        }
    });
});
const isMobile = window.innerWidth <= 968;
  

  const duration = 4500;

function updateDescription(activeIndex) {
  const items = document.querySelectorAll('.description-item');

  items.forEach((item, i) => {
    const bar = item.querySelector('.progress');
    if (!bar) return;

    item.classList.remove('active');

    bar.style.transition = 'none';
    bar.style.transform = 'scaleX(0)';

    if (i === activeIndex) {
      item.classList.add('active');

      setTimeout(() => {
        bar.style.transition = `transform ${duration}ms linear`;
        bar.style.transform = 'scaleX(1)';
      }, 50);
    }
  });
}



  updateDescription(0);


  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.closest('.description-item');
      item.classList.toggle('open');

      this.textContent = item.classList.contains('open')
        ? 'بستن'
        : 'ادامه مطلب';
    });
  });

