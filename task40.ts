/* Album: Write a function called make_album() that builds a Object describing a naat album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.

Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 

Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/


function myAlbum(naatkhuwanName: string,   albumTitle: string){
    return {naatkhuwanName, albumTitle}
}

let album1 = myAlbum("Owais Qadri", "Mujhay dur pay phir bulana");
let album2 = myAlbum("Arsalan Qadri","Har wqt tasawwar m Madinay ki gali");
let album3 = myAlbum("Ghulam Muatafa Qadri","Chor fikr dunia ki");

console.log(album1);
console.log(album2);
console.log(album3);



function myAlbum2(naatkhuwanName: string,   albumTitle: string, numberOfNaats? : number){
    return {naatkhuwanName, albumTitle, numberOfNaats}
}

let album4 = myAlbum2("Owais Qadri", "Mujhay dur pay phir bulana", 30);
let album5 = myAlbum2("Arsalan Qadri","Har wqt tasawwar m Madinay ki gali", 25);
let album6 = myAlbum2("Ghulam Muatafa Qadri","Chor fikr dunia ki");

console.log(album4);
console.log(album5);
console.log(album6);

