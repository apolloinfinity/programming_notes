function palindrome(str) {
  // Good luck!
  
  var regex = /[#_,*. /:()]/g;
  
  var palinStr = str.replace(regex, '').toLowerCase().split("-").join('');
  console.log(palinStr + ' This is palinStr');
  
  var reverseStr = palinStr.split("").reverse().join("").split([/\s/gi]).join('').split('-').join('');
  console.log(reverseStr + ' This is reverseStr');
  
  if(palinStr === reverseStr) {
    return true;
  } else if (palinStr !== reverseStr) {
    return false;
  }
}

console.log(palindrome("0_0 (: /-\ :) 0-0")); //this specifically '0_0 (: /-\ :) 0-0' should return true
console.log(palindrome("My age is 0, 0 si ega ym."));
