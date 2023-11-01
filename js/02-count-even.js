/* 
COUNT EVEN
Write a JavaScript program to find the number of even numbers in a given integer
SAMPLE INPUT:
countEven(12) -> 6
countEven(33) -> 16

*/
function countEven(number) {
    let counter = 0;

    for (let i = 2; i <= number; i++) {

        if (i % 2 === 0) {
            counter++
        }
    }
    return counter;

}

console.log(countEven(12));
console.log(countEven(33));