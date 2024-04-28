/* Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
var magicianName = ["Harry Potter", "Harmoine", "Dambaldor", "Aaslan"];
function show_magicians(great) {
    for (var _i = 0, magicianName_1 = magicianName; _i < magicianName_1.length; _i++) {
        var item = magicianName_1[_i];
        console.log(great, item);
    }
}
;
show_magicians("Hello,How are you Mr.");
show_magicians("Hello");
