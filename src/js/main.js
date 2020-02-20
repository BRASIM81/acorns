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
      console.log('clicked');
      });
});