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

//This is my solution to the problem. There is a much simpler solution. 

//function reverseLetter(str) {
//    var cleanStr = str.replace(/[0-9,\^ \$ \* \{ \} \+ \\ \/ \- \( \) \_ #?!=%]/gi&@, "");
//
//    return cleanStr.split("").reverse().join("");
//
//}


/*
console.log(reverseLetter("Hello"));
console.log(reverseLetter("ultr53o?n"));
console.log(reverseLetter("\\}t+pajs^ynm$syvjak^izqhpj*x+/#{9i83sfp"));
console.log(reverseLetter("qfmlwykes_j-pto2rttvbyec5}o5bxsyqvozyohkb"));
console.log(reverseLetter("xvjxwsbq4qlfzqdkaapy-ajebaftewetdhhc_mhwqfjuapxg"));
console.log(reverseLetter("ualy*dp!ilx!%6w$zr-wwf{z/?zlfuv4=#o4ovm0"));
*/


// This is a much simpler and faster solution to this problem
// ^ character inside of the regex tells the transpiler to look for characters that are not withing the [a-z] 
function reverseLetter2(str) {
    return str.replace(/[^a-z]/gi).split("").reverse().join("");
}

console.log(reverseLetter2("Hello"));
console.log(reverseLetter2("ultr53o?n"));
console.log(reverseLetter2("\\}t+pajs^ynm$syvjak^izqhpj*x+/#{9i83sfp"));
console.log(reverseLetter2("qfmlwykes_j-pto2rttvbyec5}o5bxsyqvozyohkb"));
console.log(reverseLetter2("xvjxwsbq4qlfzqdkaapy-ajebaftewetdhhc_mhwqfjuapxg"));
console.log(reverseLetter2("ualy*dp!ilx!%6w$zr-wwf{z/?zlfuv4=#o4ovm0"));
