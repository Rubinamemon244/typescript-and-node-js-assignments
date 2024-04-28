/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var Users = ['Eric', 'Khuzaima', 'Ayaan', 'Aqsa', 'admin'];
if (Users.length === 0) {
    console.log("we need to find some Users!");
}
else {
    for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
        var User = Users_1[_i];
        if (User === 'admin') {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(User, ",thank you for logging in again."));
        }
    }
}
//find some users
Users = [];
if (Users.length === 0) {
    console.log("we need to find some Users!");
}
