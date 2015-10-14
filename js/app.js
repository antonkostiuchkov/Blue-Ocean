$( document ).ready(function() {


  $(window).scroll(function(){


    var scrolledY = $(this).scrollTop();
        explorePosition = $('.explore').offset().top;
        windowHeight = $(window).height();
        fullTimePosition = $('.full-time').offset().top;
        footer = $('footer');
        footerPosition = footer.offset().top;


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
      $('footer').css({
        'z-index' : '-1'
      });

    } else {
      $('footer').css({
        'z-index' : '-2'
      });
    }


  });


  $('#menu-toggle').click(function(){
    var menu = $('.menu');
    menu.toggleClass('menu-open');
    return false;

  });
});
