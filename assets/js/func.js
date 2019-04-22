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
  $('.bars').click(function(){
    $('.bar1').toggleClass('bar1_active')
    $('.bar2').toggleClass('bar2_active')
    $('.bar3').toggleClass('bar3_active')
    $('.menu').toggleClass('menu-active')
    $('.bars').toggleClass('bars-active')
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
