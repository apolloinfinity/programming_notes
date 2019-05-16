//This challenge was to put a string in the first argument(str) and then repeat the string by the number in the second argument(num)
//I found out that the order in which the code is in does make a big difference. It always has but hoisting is importan thing to consider.
function repeatStringNumTimes(str, num) {
    // repeat after me
    if(num < 0)
        return "";

    var newStr = str.repeat(num);
    if(num > 0)
        return newStr;
}

repeatStringNumTimes("abc", 3);
