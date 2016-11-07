(function ($) {
    $(document).ready(function () {

        // hide #header_desktop first
        $("#header_desktop").addClass('hideme');

        // fade in #header_desktop
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 100) {
                    $('#header_desktop').removeClass('hideme');
                    $('#header_desktop').addClass('hov');
                    $('#menu_nav').addClass('hov');
                    $('#menu_lang').addClass('hov');
                } else {
                    $('#header_desktop').addClass('hideme');
                    $('#header_desktop').removeClass('hov');
                    $('#menu_nav').removeClass('hov');
                    $('#menu_lang').removeClass('hov');
                }
            });
        });
    });
}(jQuery));

/* Show navbar */

$(function () {
    $('#shownav').hover(function () {
        $('#header_desktop').removeClass('hideme');
        $('#header_desktop').removeClass('hov');
        $('#menu_nav').removeClass('hov');
        $('#menu_lang').removeClass('hov');
    });
});

/* when navbar is hovered over it will override previous */

$(function () {
    $('#header_desktop').hover(function () {
        $('#header_desktop').removeClass('hideme');
        $('#header_desktop').removeClass('hov');
        $('#menu_nav').removeClass('hov');
        $('#menu_lang').removeClass('hov');
    }, function () {
        $('#header_desktop').addClass('hideme');
    });
});

/*$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.welcome');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#header_desktop-inverse").addClass('scroll');
          $("#header_desktop").addClass('scroll');
          $("#header_desktop-brand").addClass('scroll');
          $("body").addClass('scroll');
          $(".tyjow-bg").addClass('scroll');
       } else {
          $("#header_desktop-inverse").removeClass('scroll');
          $("#header_desktop").removeClass('scroll');
          $("#header_desktop-brand").removeClass('scroll');
          $("body").removeClass('scroll');
          $(".tyjow-bg").removeClass('scroll');
       }
   });
    }
});*/