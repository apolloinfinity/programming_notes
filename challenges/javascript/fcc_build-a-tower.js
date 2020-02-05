/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
*/

function towerBuilder(nFloors) {
    // build here
    var space = "";
    var star = "";
    var result = [];

    for (var i = 1; i <= nFloors; i++) {
        space = (" ").repeat(nFloors - i);
        star = ("*").repeat((2 * i) - 1);
        result.push(space + star + space);
    }
    return result;
}

console.log(towerBuilder(10));