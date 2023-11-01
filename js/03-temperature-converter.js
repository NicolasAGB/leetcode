/*  CONVERTER
Write a javascript function convert, that takes in three inpunts, the temperature value,
the first unit to convert from and the unit to convert it to, units can be celsius(C), kelvin(K), fahrenheit(F).

SAMPLE INPUT
convert(55, "K", "C") -> 218.15C
convert(109, "K", "F") -> 263.47F
convert(2, "C", "K") -> 275.15K
convert(5, "C", "F") -> 35.6F
convert(55, "F", "K") -> 285.928K
convert(55, "F", "C") -> 12.7778C
convert(55, "K", "U") -> //wrong unit gives error

K = C +273.15
K = (F - 32) * (5/9) +273.15
C= K -273.15
C + (F -32) * (5/9)
F= C* (9/5) + 32
F = (K - 273.15) * (9/5) + 32


*/

function convert(temp, unitFrom, unitTo) {
    let result;
    if (unitFrom === "K" & unitTo === "C") {
        result = (temp - 273.15).toFixed(2) + "C";
    } else if (unitFrom === "K" & unitTo === "F") {
        result = (((temp - 273.15) * (9 / 5) + 32)).toFixed(2) + "F";
    } else if (unitFrom === "C" & unitTo === "K") {
        result = (temp + 273.15).toFixed(2) + "K";;
    } else if (unitFrom === "C" & unitTo === "F") {
        result = (temp * (9 / 5) + 32).toFixed(2) + "F";
    } else if (unitFrom === "F" & unitTo === "K") {
        result = ((temp - 32) * (5 / 9) + 273.15).toFixed(2) + "K";
    } else if (unitFrom === "F" & unitTo === "C") {
        result = (temp - 32) * (5 / 9).toFixed(2) + "C";
    } else {
        result = "Wrong Unit";
    }
    return result;

}

console.log(convert(55, "K", "C"));
console.log(convert(109, "K", "F"));
console.log(convert(2, "C", "K"));
console.log(convert(5, "C", "F"));
console.log(convert(55, "F", "K"));
console.log(convert(55, "F", "C"));
console.log(convert(55, "K", "U"));