$(window).scroll(function(){
  var scrolledY = $(this).scrollTop();
  var elemPos = $('.full-time').offset().top;
  var windowDes = $(window).height();
  var offset = Math.min(0, scrolledY - elemPos + windowDes - 600);

  if(scrolledY > elemPos - windowDes){

    $('.globe').css({
      'transform' : 'translate('+ offset +'px, '+ offset * -0.5 +'px)'
    });
    $('.notebook').css({
      'transform' : 'translate('+ (-offset) +'px, '+ offset * -0.2 +'px)'
    });
    $('footer').css({
      'z-index' : '-1'
    });

  } else {
    $('footer').css({
      'z-index' : '-2'
    });
  }
});


