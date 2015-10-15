$( document ).ready(function() {


  $(window).scroll(function(){


    var scrolledY = $(this).scrollTop();
        explorePosition = $('.explore').offset().top;
        windowHeight = $(window).height();
        fullTimePosition = $('.full-time').offset().top;
        spotlight = $('.spotlight');
        spotlightPosition = spotlight.offset().top;
        headerImage = $('.header-image');


    // Landing training items
    if(scrolledY > explorePosition - (windowHeight / 1.4)) {

      var trainingItem = $('.training-list .training-item');

      trainingItem.each(function(i){

        setTimeout(function(){
          trainingItem.eq(i).addClass('is-showing');
        }, (700 * (Math.exp(i * 0.14))) - 700);
      });

    }

    // Full-time course fly-out

    if(scrolledY > fullTimePosition - windowHeight){

      var offset = (Math.min(0, scrolledY - fullTimePosition + windowHeight - 550)).toFixed();

      $('.globe').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 1) +'px)'});

      $('.notebook').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.1) +'px)'});

    }

    if (scrolledY > spotlightPosition) {
      headerImage.css({'display' : 'none'});
    }
    else {
      headerImage.css({'display' : 'block'});
    }

  });


  $('#menu-toggle').click(function(){
    var menu = $('.menu');
    menu.toggleClass('menu-open');
    return false;

  });
});
