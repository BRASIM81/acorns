new WOW().init();
$(document).ready(function(){
   var d = new Date();
   var n = d.getFullYear();
   document.getElementById("copy").innerHTML = "ACORNS " + n;

   $('.home-nav').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      },800);
      });
   $(window).on('scroll', function(){
      var wScroll = $(this).scrollTop();
      if(wScroll > $('.trigger').offset().top-($(window).height()/1.2)){
         $('.home-nav').css({
            'transform':'translate(0,0)',
            'opacity':'0.8'
         });
      } else {
         $('.home-nav').css({
            'transform':'translate(-100px,0)',
            'opacity':'0'
         });
      }
   });

});