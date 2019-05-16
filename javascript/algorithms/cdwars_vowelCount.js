function getCount(str) {
  // var src = str;
  var er = /[aeiou]/gi;
  var result = str.match(er);
  if(result === null)
    return 0;
  if(result.length >= 1)
    return result.length;
}

var pyx = getCount('my pyx'); //should return 0
var abra = getCount('abracadabra'); //shoul return 5
var jib = getCount('o a kak ushakov lil vo kashu kakao'); //Should return 15

console.log(pyx);
console.log(abra);
console.log(jib);

/*
Another way of doing this

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/