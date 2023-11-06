/* 
Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7

SAMPLE INPUT:
	console.log(test37(12)); -> true
	console.log(test37(14)); -> true
	console.log(test37(10)); -> false
	console.log(test37(11)); -> false

*/

function test37(number) {
  if (Math.abs(number % 3 === 0) || Math.abs(number % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(test37(12)); //-> true
console.log(test37(14)); //-> true
console.log(test37(10)); //-> false
console.log(test37(11)); //-> false
