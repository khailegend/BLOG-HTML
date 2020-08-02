/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function ($) {
  'use strict';


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function (event) {
      let $anchor = $(this);
      let headerH = '0';
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        );
      event.preventDefault();
    });
  }

  function init() {
    scrollToAnchor();
    getBarwidth();
    screenSize();
  }

  $(document).ready(function () {
    init();
  }); // end document ready function

  $(window).on('scroll', function () {
  });


  $(window).bind('resize', function() {
    if($( window ).width() < 768 ) {
      $('.navbar-account').addClass('dropdown');
      $('.toggle-account').addClass('dropdown-toggle');
      $('.link-account').addClass('dropdown-menu dropdown-menu-right');
      $('.link-account.btn').addClass('dropdown-item');
      $('.toggle-account').removeClass('display')
      
    }
    else {
      $('.navbar-account').removeClass('dropdown');
      $('.toggle-account').removeClass('dropdown-toggle');
      $('.link-account').removeClass('dropdown-menu dropdown-menu-right');
      $('.link-account.btn-account').removeClass('dropdown-item');
      $('.toggle-account').addClass('display')
    }
  });

  function screenSize() {
    if($( window ).width() < 768 ) {
      $('.navbar-account').addClass('dropdown');
      $('.toggle-account').addClass('dropdown-toggle');
      $('.link-account').addClass('dropdown-menu dropdown-menu-right');
      $('.link-account.btn').addClass('dropdown-item');
      $('.toggle-account').removeClass('display')
      
    }
    else {
      $('.navbar-account').removeClass('dropdown');
      $('.toggle-account').removeClass('dropdown-toggle');
      $('.link-account').removeClass('dropdown-menu dropdown-menu-right');
      $('.link-account.btn-account').removeClass('dropdown-item');
      $('.toggle-account').addClass('display')
    }
  };

  // if ($('.x-toTop').length) {
  //   let scrollTrigger = 100, // px
  //     backToTop = function () {
  //       let scrollTop = $(window).scrollTop();
  //       if (scrollTop > scrollTrigger) {
  //         $('.x-toTop').addClass('active');
  //       } else {
  //         $('.x-toTop').removeClass('active');
  //       }
  //     };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  // }

})(jQuery); // End jQuery
