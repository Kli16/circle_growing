var canvas = document.getElementById("slate");
var context = canvas.getContext('2d');
var clear_button =  document.getElementById("clear");
var stop_button = document.getElementById("stop");

var growing;
var requestID;

var clear = function(){
  context.clearRect(0,0,500,500);
  window.cancelAnimationFrame(requestID);
}

var is_growing = function(rad){
  if (rad >= 250){
    growing = false;
  } else if (rad <= 1){
    growing = true;
  }
}
var animate = function(e){
  window.cancelAnimationFrame(requestID);
  var r = 0;
  var circle_grow = function(){
    context.clearRect(0, 0, 500, 500);
    context.beginPath();
    context.arc(250, 250, r, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    is_growing(r);
    if (growing){
      r++;
    } else {
      r--;
    }
    //console.log(requestID);
    requestID = window.requestAnimationFrame(circle_grow);
  }
  requestID = window.requestAnimationFrame(circle_grow);

}


var stopit = function(){
  window.cancelAnimationFrame(requestID);
}


canvas.addEventListener('click', animate);
clear_button.addEventListener('click', clear);
stop_button.addEventListener('click', stopit);
