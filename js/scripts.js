$(document).ready(function(){
  
  window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
      navbar.style.top = "-50px";
    } else {
      navbar.style.top = "0";
    }
  };

  

});

