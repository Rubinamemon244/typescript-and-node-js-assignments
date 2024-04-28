/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed*/

 let myPlaces: string[] = ["Madina","Pakistan","UK","Quetta","Iran"];
console.log("original order:",myPlaces);

console.log("alphabetical order:", [...myPlaces].sort());

console.log("original order after sorting:", myPlaces);

console.log("reverse alphabetical order:", [...myPlaces].sort().reverse());

console.log("original order after reverse sorting:", myPlaces);

myPlaces.reverse();
console.log("reversed order:", myPlaces);

myPlaces.reverse();
console.log("back to original order:", myPlaces);

myPlaces.sort();
console.log("sorted in alphabetical order:", myPlaces);

myPlaces.sort((a,b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", myPlaces);




