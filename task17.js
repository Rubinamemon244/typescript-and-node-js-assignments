"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let Guests = ["Ronaldo", "Harry Potter", "Muqaddus", "Jannat", "Ayesha", "Alina"];
console.log("Due to limited space,only two people can be invited for dinner\n");
// remove 4 last guests
let guest1 = Guests.pop();
console.log(`Sorry dear, ${guest1} you're no longer invited to dinner!`);
let guest2 = Guests.pop();
console.log(`Sorry dear, ${guest2} you're no longer invited to dinner!`);
let guest3 = Guests.pop();
console.log(`Sorry dear, ${guest3} you're no longer invited to dinner!`);
let guest4 = Guests.pop();
console.log(`Sorry dear, ${guest4} you're no longer invited to dinner!`);
for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear, ${Guests[i]} : \n you are still invited to dinner! \n`);
}
Guests.pop();
Guests.pop();
console.log(Guests);
