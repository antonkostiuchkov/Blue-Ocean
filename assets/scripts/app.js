var parallaxScroll = function () {

  var scrolledY = $(this).scrollTop();
      explorePosition = $('.explore').offset().top;
      windowHeight = $(window).height();
      fullTimePosition = $('.full-time').offset().top;


  // Landing training items
  if(scrolledY > explorePosition - (windowHeight / 1.2)) {

    var trainingItem = $('.training-list .training-item');

    trainingItem.each(function(i){

      setTimeout(function(){
        trainingItem.eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }

  // Full-time course fly-out

  if(scrolledY > fullTimePosition - windowHeight){

    var offset = (Math.min(0, scrolledY - fullTimePosition + windowHeight - 500)).toFixed();

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


};


// shim layer with setTimeout fallback. Request an animation in the next repaint.
window.requestAnimFrame = (function(){
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
  function(callback){
    window.setTimeout(callback, 1000 / 60);
  };
})();


$(window).scroll(function(){
  window.requestAnimFrame(parallaxScroll);
});
