/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

let guest_list : string[] = [ "Ronaldo", "Harry Potter", "Ayesha"];

for ( let i=0; i < guest_list .length; i++){
    console.log(`Dear ${guest_list[i]} : \n you are invuted to dinner! \n`);
}
console.log(`"Unfortunately ${guest_list[2]}, can't come to dinner."`);

guest_list[2] = "Muqaddus";

console.log("\nNEW LIST OF INVITATION : \n");

for ( let j=0; j < guest_list.length; j++){
    console.log(`Dear ${guest_list[j]} : \n you are invuted to dinner! \n`);
}
