/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!.*/
var favourite_fruits = ['banana', 'apple', 'mango'];
// favoirite_fruits === banana
if (favourite_fruits.includes('banana')) {
    console.log("you really like bananas!");
}
if (favourite_fruits.includes('apple')) {
    console.log("you really like apples!");
}
if (favourite_fruits.includes('mango')) {
    console.log("you really like mangoes!");
}
if (favourite_fruits.includes('strawberry')) {
    console.log("I don't like strawberries!");
}
if (favourite_fruits.includes('orange')) {
    console.log("I don't like oranges!");
}
