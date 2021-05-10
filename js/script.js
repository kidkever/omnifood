$(document).ready( function () {
    
// Show and Hide The Sticky Nav On Scrolling
    $('.js--features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });
    
    
// Buttons Scroll
    $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-features').click(function(){
       $('html, body').animate({scrollTop: $('.js--features').offset().top}, 1000);
    });
    
    
// Nav Scroll
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    
// Css Animations
    $('.js--wp-1').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-1').addClass('animated fadeIn').removeClass('fadeOut');
        } else {
            $('.js--wp-1').addClass('fadeOut').removeClass('fadeIn');
        }
    }, {
            offset: '580px;'
    });
    
    $('.js--wp-2').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-2').addClass('animated fadeInUp').removeClass('fadeOutDown');
        } else {
            $('.js--wp-2').addClass('fadeOutDown').removeClass('fadeInUp');
        }
    }, {
        offset: '500px'
    });

    $('.js--wp-3').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-3').addClass('animated fadeIn').removeClass('fadeOut');
        } else {
            $('.js--wp-3').addClass('fadeOut').removeClass('fadeIn');
        }
    }, {
            offset: '580px;'
    });
    
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });
    
// Mobile Nav
    /*  
        show mobile nav close when clicking on the hamburger nav
        hide it and show the habmurger nav when clicking on mobile nav icon close
    */
    
    
//    $('.mobile-nav-closed-icon').click(function(){
//       $('nav ul').removeClass('main-nav').addClass('mobile-nav-opened');
//    });
//    
//    $('.mobile-nav-opened-icon').click(function(){
//       $('nav ul').removeClass('mobile-nav-opened').addClass('main-nav');
//    });
//    
    
    $('.mobile-nav-closed-icon, .mobile-nav-opened-icon').click(function(){
        $('nav ul').toggleClass('main-nav mobile-nav-opened');
    });
    
    
});















