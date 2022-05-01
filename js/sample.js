
/* This will make the background for the Header Menu to change its color when scrolled down
and make the Background transparent when scrolled up */
$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){ /* this will determine the height in which the background color will change */
    	$(".navbar").css("background","rgba(0,0,0,0.7)"); /* background color when scrolled down */
    }
    else{
    	$(".navbar").css("background","rgba(0,0,0,0"); /* Background color when scrolled up */
    }
  });
});
/* End of Command */

/* This will apply an animation on all button that have an "href" attribute */
$('a[href^="#"]').click(function () {
  $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);

  return false;
});
/* End of Command */

/* This will make the "GO TO TOP" Button appear when scrolled down and Dissapear when viewing the top page */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { /* Computation for appearing and dissapearing of the button */
        document.getElementById("myBtn").style.display = "block"; /* This will make the button appear */
    } else {
        document.getElementById("myBtn").style.display = "none"; /* This will make the button dissapear */
    }
}
/* End of Command */

/* This will make the "Overlay Text" on the banner to fade in when the page was loaded for the first time */
$(document).ready(function(){
  $(".hide1").hide(0).delay(200).fadeIn(3000)
});
/* End of Command */

/* This will make the Element Div to Fade in when the Element is Completely Visible on the Viewport of the Screen */
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).height();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1500);
                  
          }
          
      }); 
  
  });
  
});
/* End of Command */