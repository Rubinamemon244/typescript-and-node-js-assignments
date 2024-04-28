"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/
let str1 = 'Rubina';
let str2 = 'Memon';
let number1 = 5;
let number2 = 10;
let array = [1, 2, 3, 4, 5];
//• Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log(str1 === 'Rubina');
console.log(str1 === str2);
//• Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(str1.toLowerCase() === 'rubina');
console.log(str2.toLowerCase() !== 'memon');
// Numericals tests
console.log("\nNumericals tests:");
console.log(1 < 2);
console.log(number1 >= number2);
console.log(number1 === 5);
console.log(number2 !== 10);
// Tests using "and" and "or" operators
console.log("\nTests using 'and' 'or' operations:");
console.log((number1 < 10) && (number2 > 5));
console.log((number1 < 3) || (number2 > 15));
// Test whether an item is in a array
console.log("\nTests whether an item is in an array:");
console.log(array.includes(3));
console.log(array.includes(6));
//Test whether an item is not in a array
console.log("\nTests whether an item is not in an array:");
console.log(!array.includes(6));
console.log(!array.includes(2));
