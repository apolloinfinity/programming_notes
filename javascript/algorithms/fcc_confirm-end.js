/*The challange was to create a function that would take on two parameters.
It takes the first argument(str) and checks to see if it ends with the targeted string(target)
*/
function confirmEnding(str, target) {
    var target2 = str.substring(str.length - target.length);
     if(target === target2){
         return true;
     } else {
         return false;
     }

 }

 confirmEnding("Bastian", "n");
