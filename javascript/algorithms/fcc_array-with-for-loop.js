var myArr = [ 2, 3, 4, 5, 6]; 

// Only change code below this line
var total = 0;

for(var j = 0; j < myArr.length; j++) {
  total += myArr[j];
}


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
multiplyAll([[1,2],[3,4],[5,6,7]]);
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]);
