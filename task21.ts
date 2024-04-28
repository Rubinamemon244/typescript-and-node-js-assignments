
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

interface type {
  Name:string,Age:number,Profession:string
}

let OBJ:type = {Name:'Rubina', Age:30, Profession:'Teacher'};

console.log('\n Object Containing Information About Me : \n');
console.log(`My Name Is: ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} Years Old`);
console.log(`I am a ${OBJ.Profession}`);




