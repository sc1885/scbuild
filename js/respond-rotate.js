// get browser size
$(window).load(function() {
$('.flexslider').flexslider();
});

$(document).ready(function(){
$('.currentsize').text($(window).width() + " X " + $(window).height() );
$(window).resize(function() {
// alert("Width with scrollbars: " + $(window).width());
$('.currentsize').text($(window).width() + " X " + $(window).height());
});  
                        
            });

// start flexslider 




  $(document).ready(function(){
    $('.hoverbox').mouseenter(function(){
      $('.firstimage').fadeOut(200);
    }).mouseleave(function(){
      $('.firstimage').fadeIn(200);
    });


// Load this when the DOM is ready
$('.carousel').carousel();



  });
$(document).ready(function(){


$('.slider1').bxSlider({
slideWidth: 600,
minSlides: 2,
maxSlides: 2,
slideMargin: 10
});





});



$(document).ready(function(){
        // start scroll to top
  
$(window).load(function () {
var delay = setTimeout(function () {
if ($(window).scrollTop() <= 0 && !location.hash) window.scrollTo(0, 1);
  }, 500);
});
        // end scroll to top       
    //check the navigator.userAgent string to detect if the user is using an iPhone
    if (navigator.userAgent.match(/iPhone/i)) {

        //cache the viewport tag if the user is using an iPhone
        var $viewport = $('head').children('meta[name="viewport"]');

        //bind an event handler to the window object for the orientationchange event
        $(window).bind('orientationchange', function() {
            if (window.orientation == 90 || window.orientation == -90 || window.orientation == 270) {

                //landscape
                $viewport.attr('content', 'height=device-width,width=device-height,initial-scale=1.0,maximum-scale=1.0');
            } else {

                //portrait
                $viewport.attr('content', 'height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0');
            }

        //trigger an orientationchange event on the window object to initialize this code (basically in-case the user opens the page in landscape mode)
        }).trigger('orientationchange');
    }
  
          //check the navigator.userAgent string to detect if the user is using an iPhone


        
        
      });