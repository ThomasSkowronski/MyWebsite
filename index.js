$(document).mousemove(
  function(e){
  $("#mouseFly").css({left:e.pageX, top:e.pageY});
});