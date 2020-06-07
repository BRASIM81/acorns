new WOW().init();
window.onload = function(){
   if(document.cookie.length != 0){
      var cookieVal = document.cookie.split("=");
      if(cookieVal[1] == 'yes'){
         $('#cookies').css({
            'opacity':'0',
            'transform':'translate(0,100%)'
         });
      }
   }
}
$(document).ready(function(){

   $(".cookie").on('click', function(e){
      document.cookie = "cookieacpt=yes";
   });

   var d = new Date();
   var n = d.getFullYear();
   document.getElementById("copy").innerHTML = "ACORNS " + n;

   $('#cookie').on('click', function(e){
      e.preventDefault();
      $('#cookies').css({
         'opacity':'0',
         'transform':'translate(0,100%)'
      });
   });

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

function myMap() {

   var myCenter = new google.maps.LatLng(51.9980503, -1.9973667);

   var mapProp = {
       center: myCenter,
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.HYBRID
   };

   var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

   var marker = new google.maps.Marker({
       position: myCenter,
   });

   marker.setMap(map);
}