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



//Bartender
  let btnOne = document.getElementById("btn");
   let msg = document.getElementById("msg");
   let itms = document.getElementsByClassName("items");
   let snd = document.getElementById("sendmsg");
   let close = document.getElementById("plus");
   let dialogText = document.getElementsByClassName("mss");
   let effct = document.querySelector(".effect");
   console.log(dialogText);
   btnOne.addEventListener("click", function() {
     btnOne.classList.toggle("move");
     msg.classList.toggle("resize");
     snd.classList.toggle("send");
     close.classList.toggle("one-move");
     effct.classList.toggle("effectshow");
     for (let i = 0; i <= dialogText.length; i++) {
       dialogText[i].classList.toggle("mss-show");
       itms[i].classList.toggle("itmshow");
     }
   });

})
