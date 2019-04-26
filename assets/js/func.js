$(document).ready(function(){
  // $(window).scroll(function(){
  //   var k = $(window).scrollTop();
  //   console.log(k);
  //   if(k>5){
  //     for (k < 637; i++) {
  //       // $('.landhead').
  //     }
  //   }
  // })
  $('.bars, .item').click(function(){
    $('.bar2').toggleClass('bar1-ac')
    $('.bar1').toggleClass('bar2-ac')
    $('.bar3').toggleClass('bar3-ac')
    $('.menu').toggleClass('menu-ac')
    $('.bars').toggleClass('bars-ac')
    $('body').toggleClass('flow')
    $('.tint').toggleClass('tinted')
    $('.bar-name').toggleClass('bar-name-ac')
  })
  $('.p1').hover(function(){
    $('.pt1').toggleClass('point-text-ac')
  })
  $('.p2').hover(function(){
    $('.pt2').toggleClass('point-text-ac')
  })
  $('.p3').hover(function(){
    $('.pt3').toggleClass('point-text-ac')
  })
  $('.p4').hover(function(){
    $('.pt4').toggleClass('point-text-ac')
  })
  $('.it1').click(function(){
			$('body, html').animate({scrollTop:$('.land').offset().top}, 1000)
	})
  $('.it2').click(function(){
			$('body, html').animate({scrollTop:$('.about').offset().top}, 1000)
	})
  $('.it3').click(function(){
			$('body, html').animate({scrollTop:$('.works').offset().top}, 1000)
	})
  $('.it4').click(function(){
			$('body, html').animate({scrollTop:$('.contact').offset().top}, 1000)
	})
  $('.btn1').click(function(){
    $('.mailme').addClass('goto_active');

  })
  $('.it').click(function(){
    $('.menu').toggleClass('menu-active')
    $('.bar1').toggleClass('bar1_active')
    $('.bar2').toggleClass('bar2_active')
    $('.bar3').toggleClass('bar3_active')
    $('.bars').toggleClass('bars-active')
  })
  })
