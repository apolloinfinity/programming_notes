function chunkArrayInGroups(arr, size) {
    // Break it up.
    
    //Empty array
    var output = [];
    
    //i variable set to zero and to be used in the while loop
    var i = 0;
    
    while(i < arr.length){
        output.push(arr.slice(i, i += size));
    }
    return output;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
