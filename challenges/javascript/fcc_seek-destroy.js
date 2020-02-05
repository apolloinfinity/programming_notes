
function destroyer(arr) {
  //arr is the only referenced argument. Therefore it's index is already assigned to 0
  
  var args = Array.from(arguments).slice(1);//Slices and creates a new array from second index (1)
  
  //return array using a filter with an anonymous function
  //callback function checks to see if val is not in args. 
 	return arr.filter(function(val){
      return !args.includes(val);
    });
}
