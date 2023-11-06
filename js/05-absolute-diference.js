/* ABSOLUTE DIFERENCE PROBLEM*/
/*Write a javaScript program to get the diference between a given 
number and 13, if the number is broader than 13 return
double the absolute difference. */

/* SAMPLE INPUT */
/* console.log(difference(32)) -> 38 */
/* console.log(difference(11)) -> 2 */

function difference(number) {
  if (number > 13) {
    return 2 * (number - 13);
  } else {
    return 13 - number;
  }
}

console.log(difference(32));
console.log(difference(11));
