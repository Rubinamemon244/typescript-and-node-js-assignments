/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

 • Modify your program to print a statement about each animal, such as A dog would make a great pet.

 • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!.*/

let animalsName = ["Dog","Tiger","Lion"];

for(let i of animalsName){
   console.log(i);
}
   console.log("\n")

for(let j of animalsName){
    console.log (`${j} is a wild animal.`);
}


console.log("\n All of these animals are wild but dog is a great pet");