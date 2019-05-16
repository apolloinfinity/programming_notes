var family = [];  //empty array
var lastName = prompt('Last Name'); //prompting for last name

for (var i = 0; i < 5; i++) {
    var firstName = prompt('First names');
    family.push(firstName + ' ' + lastName)//pushes both first and last name to array
}

console.log(family);
