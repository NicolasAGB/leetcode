/* SWAP
Write a javascript function to swap two variables

SAMPLE INPUT: swap(1,2)

    first variable before: 1
    first variable before: 2

    first variable after: 2
    first variable after: 1

*/

function swap(a, b) {
    console.log("first variable before: " + a);
    console.log("second variable before: " + b);
    let c = a;
    a = b;
    b = c;
    console.log("first variable AFTER: " + a);
    console.log("second variable AFTER: " + b);
}

swap(1, 2);