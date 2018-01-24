(function(){
'use strict';

function onPositionReceived(position){
  console.log(position);
}

function locationNotReceived(positionError){
  console.log(positionError);
}


if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived, {timeout:5}); 
}

}());