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
};
$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

   $('.head-logo>h1').css({
      'transform' : 'translate(0px, '+wScroll/3+'%)'
   });
   $('.head-logo>h3').css({
      'transform' : 'translate(0px, '+wScroll/2+'%)'
   });
});
$(document).ready(function(){

   $("#cookie").on('click', function(e){
      e.preventDefault();
      document.cookie = "cookieacpt=yes;max-age=" + (60 * 60 * 24 * 30) + ";";
   });

   var d = new Date();
   var y = d.getFullYear();
   document.getElementById("copy").innerHTML = "ACORNS " + y;

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
const rippleBtns = document.querySelectorAll(".ripple");

function mousePosCustomPos(event, element){
	let posX = event.offsetX;
	let posY = event.offsetY;

	element.style.setProperty("--x", posX + "px");
	element.style.setProperty("--y", posY + "px");

}

rippleBtns.forEach(rippleBtn =>{
	rippleBtn.addEventListener("mousedown", (e) => {
		mousePosCustomPos(e, rippleBtn);
		rippleBtn.classList.add("pulse");
		rippleBtn.addEventListener("animationend", () => {
			rippleBtn.classList.remove("pulse");
		});
	});
});