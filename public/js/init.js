(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel({
      padding: 200    
    });
      
  autoplay();
  
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
}
  });


//Hamburger navbar funcionality
$(document).ready(function(){
  $('.burger-menu').click(function(){
    $('.dropdown-content').toggleClass('show');
  });
  $(document).click(function(event) { 
      if(!$(event.target).closest('.burger-menu').length) {
          if($('.dropdown-content').is(":visible")) {
              $('.dropdown-content').toggleClass('show');
          }
      }        
  });
  });

