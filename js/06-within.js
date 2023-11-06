/* 

Write a JavaScript programa to check whetherr a given 
intenger is within 20 of 100 or 400

SAMPLE INPUT:
	console.log(testhundred(10)); -> false
	console.log(testhundred(90)); -> true
	console.log(testhundred(99)); -> true
	console.log(testhundred(199)); -> false
	console.log(testhundred(200)); -> false

*/
function testhundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(testhundred(10)); //-> false
console.log(testhundred(90)); //-> true
console.log(testhundred(99)); //-> true
console.log(testhundred(199)); //-> false
console.log(testhundred(200)); //-> false
