function largestOfFour(arr) {
  //empty array to which the largest number of each sub array will be pushed too
  var results = [];

  //for loop to iterate through the array
  for (var i = 0; i < arr.length; i++) {
    //largest number will tracked in the lrgNum variable
    var lrgNum = 0;

    //this for loop iterates through the subArrays
    for (var j = 0; j < arr[i].length; j++) {
      //the if statement check if the subarray [j] is larger than the lrgNum
      if (arr[i][j] > lrgNum) {
        //if the j is larger than lrgNum, which it is in this case, lrgNum is given the value of the sub-array arr[i][j]
        lrgNum = arr[i][j];
      }
    }

    results[i] = lrgNum;
  }

  return results;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
