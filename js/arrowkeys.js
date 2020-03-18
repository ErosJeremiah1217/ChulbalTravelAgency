$(document).keydown(function(e) {
    if (e.keyCode === 37) {
      
       $(".carousel-control.left").click();
       return false;
    }
    if (e.keyCode === 39) {
      
       $(".carousel-control.right").click();
       return false;
    }
});