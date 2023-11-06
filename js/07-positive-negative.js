/* 
Write a JavaScript proram to check two given intengers wether one is
 positive and another one is negative.

 SAMPLE INPUT:
	console.log(positive_negative(2, 2)); -> false
	console.log(positive_negative(-2, 2)); -> truie
	console.log(positive_negative(2, -2)); -> true
	console.log(positive_negative(-2, -2)); -> false

*/

function positive_negative(a, b) {
  if (a === 0 || b === 0) {
    console.log("0 is not positive neither negative");
  } else {
    if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(positive_negative(2, 2)); //-> false
console.log(positive_negative(-2, 2)); //-> truie
console.log(positive_negative(2, -2)); //-> true
console.log(positive_negative(-2, -2)); //-> false
