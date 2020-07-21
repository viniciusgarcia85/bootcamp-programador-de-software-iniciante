/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
  The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
*/
multiples = []; 
for (var n = 3; n < 1000; n++) {
  if ((n % 3 === 0) || (n % 5 === 0)) {
    multiples.push(n);
  }
  var sum = 0;
  for (var i = 0; i < multiples.length; i++) {
    sum += multiples[i] ;
  }
}
console.log("The sum of these multiples is " + sum)