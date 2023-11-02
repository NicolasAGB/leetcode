/*  LARGEST
a) Write a JavaScript program to find the largest of three given integers.

SAMPLE INPUT:
    max_of_three(1,0,1) -> 1
    max_of_three(0,-10,-20) -> 0
    max_of_three(1000,510,440) -> 1000

b) Modify your function to take in any number of inputs and yet returns the maximum number

SAMPLE INPUT
    max(1,2,3,4) -> 4
    max(4,0,100,36,22,200,208,150) -> 206

*/
function max_of_three(numberOne, numberTwo, numberThree) {
    maxim = 0;
    if (numberOne > numberTwo) {
        maxim = numberOne;
    } else {
        maxim = numberTwo
    }
    if (numberTwo > numberThree) {
        maxim = numberTwo;
    } else {
        maxim = numberThree
    }
    if (numberOne > numberThree) {
        maxim = numberOne;
    } else {
        maxim = numberThree
    }
    return console.log(maxim);
}


max_of_three(1, 0, 1); //-> 1
max_of_three(0, -10, -20); //-> 0
max_of_three(1000, 510, 440); //-> 1000


function max(...numbers) {

    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i]
        }

    }
    return  max;
}

console.log(max(1, 2, 3, 4));
console.log(max(4, 0, 100, 36, 22, 200, 208, 150));


