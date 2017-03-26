
function printFullAge(years){
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++){
        ages[i] = 2017 - years[i];
    }

    for (var j = 0; j < ages.length; j++){
        if(ages[j] >= 18){
            console.log("The person is " + ages[j] + " years old and is of full age");
            fullAges.push(true);
        } else {
            console.log("The person is " + ages[j] + " years old and is not of full age");
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [1988, 2001, 1943, 2010, 1969];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
