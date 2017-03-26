
function printFullAge(years){
    var ages = []; //empty array for ages
    var fullAges = [];

    for (var i = 0; i < years.length; i++){
        //for loop iterates through the array of numbers
        ages[i] = 2017 - years[i]; // ages[i] is assigned each of the ages from the 2017 - years[i]
    }
    
    //This second loop iterates through the ages array
    for (var j = 0; j < ages.length; j++){
        
        // The if else checks to see if the ages are over 18 and console log a corresponding message. 
        if(ages[j] >= 18){
            console.log("The person is " + ages[j] + " years old and is of full age");
            
            //If the ages is over 18, it is then pushed to the fullAges array
            fullAges.push(true);
        } else {
            console.log("The person is " + ages[j] + " years old and is not of full age");
            
            //If it is not over 18, false gets pushed to the array. 
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [1988, 2001, 1943, 2010, 1969];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
