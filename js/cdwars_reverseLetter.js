/*
Task

Given a string str, reverse it omitting all non-alphabetic characters.

Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output

[input] string str

A string consists of lowercase latin letters, digits and symbols.
[output] a string

Use RegExp
Use Slice
Use Split and Reverse
*/


function reverseLetter(str) {
    var cleanStr = str.replace(/[0-9,!@#$%^&*(){}:"<>?"]/gi, "");

    return cleanStr.split("").reverse().join("");

}


console.log(reverseLetter("Hello"));
console.log(reverseLetter("ultr53o?n"));
