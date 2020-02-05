function descendingOrder(n){
    var numToStr = n.toString().split("");// converted n to a string and split it to create an array
    var toInt = numToStr.map(Number);
    return parseInt(toInt.sort(function(a,b){
        return b - a;
    }).join(''));
}

descendingOrder(123456789);