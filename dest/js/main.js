(new WOW).init(),window.onload=function(){0!=document.cookie.length&&"yes"==document.cookie.split("=")[1]&&$("#cookies").css({opacity:"0",transform:"translate(0,100%)"})},$(document).ready(function(){$("#cookie").on("click",function(o){o.preventDefault(),document.cookie="cookieacpt=yes;max-age=2592000;"});var o=(new Date).getFullYear();document.getElementById("copy").innerHTML="ACORNS "+o,$("#cookie").on("click",function(o){o.preventDefault(),$("#cookies").css({opacity:"0",transform:"translate(0,100%)"})}),$(".home-nav").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},800)}),$(window).on("scroll",function(){$(this).scrollTop()>$(".trigger").offset().top-$(window).height()/1.2?$(".home-nav").css({transform:"translate(0,0)",opacity:"0.8"}):$(".home-nav").css({transform:"translate(-100px,0)",opacity:"0"})})});const rippleBtns=document.querySelectorAll(".ripple");function mousePosCustomPos(o,e){var t=o.offsetX,o=o.offsetY;e.style.setProperty("--x",t+"px"),e.style.setProperty("--y",o+"px")}rippleBtns.forEach(e=>{e.addEventListener("mousedown",o=>{mousePosCustomPos(o,e),e.classList.add("pulse"),e.addEventListener("animationend",()=>{e.classList.remove("pulse")})})});