"use strict";
let myname = "Rubina";
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());
function toTitleCase(username) {
    return username.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
console.log(` Titlcase ${toTitleCase(myname)} `);
