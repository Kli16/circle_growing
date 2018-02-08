var canvas = document.getElementById("slate");
var context = canvas.getContext('2d');
var clear_button =  document.getElementById("clear");
var stop_button = document.getElementById("stop");
var grow_button = document.getElementById("grow");
var bounce_button = document.getElementById("bounce");

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

var r = 0;
var growandshrink = function(e){
  window.cancelAnimationFrame(requestID);

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

var x = 250;
var y = 250;
var xvel = 2;
var yvel = 1;

var bounce = function(e){
  window.cancelAnimationFrame(requestID);

  var circle_bounce = function(){
    context.clearRect(0, 0, 500, 500);
    context.beginPath();
    context.arc(x, y, 30, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    x += xvel;
    y += yvel;
    if (x == 470 || x == 30) {
      xvel *= -1;
    }
    if (y == 30 || y == 470){
      yvel *= -1;
    }
    //console.log(requestID);
    requestID = window.requestAnimationFrame(circle_bounce);
  }
  requestID = window.requestAnimationFrame(circle_bounce);

}

var stopit = function(){
  window.cancelAnimationFrame(requestID);
}


clear_button.addEventListener('click', clear);
stop_button.addEventListener('click', stopit);
grow_button.addEventListener('click', growandshrink);
bounce_button.addEventListener('click', bounce);
