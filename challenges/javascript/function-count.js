var counter = 0;

function fCounter(num) {
  counter = counter + 1;
  return num * num * num;
}

fCounter(4);
fCounter(3);
fCounter(8);
fCounter(2);
fCounter(10);

console.log(counter);
