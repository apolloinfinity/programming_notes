function rot13(str) {

    var charArray = []; // empty array to store

   
    for(var i = 0; i < str.length; i++) {
        var strChar = str.charCodeAt(i);
        if (strChar === 32 || strChar === 33 || strChar === 63|| strChar === 46) {
            charArray.push(String.fromCharCode(strChar));
        } else if (strChar >= 65 && strChar <= 77) {
            charArray.push(String.fromCharCode(strChar + 13));
        } else if (strChar >= 78 && strChar <= 90) {
            charArray.push(String.fromCharCode(strChar - 13));
        }
    }
    
    
//    if(strChar >= 65 && strChar <= 77) {
//        return String.fromCharCode(add);
//    } else if (strChar => 78 && strChar <= 89) {
//        return String.fromCharCode(take);
//    }
    
    return charArray.join("");
}


//create an array of the uniciode numbers
//Possiblg use the Ternary operator for the if/else statement

//A = 65 character code
//N = 78
//Z = 90

//rot13("SERR PBQR PNZC");

//skeletonplus