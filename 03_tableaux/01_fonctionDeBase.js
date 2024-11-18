let myArray = [];
let myNames = ["Riri", "Fifi", "Loulou"];

let myArray2 = new Array(5);

console.log(myArray, myNames, myArray2);

// Ajout d'un élément
myArray.push("Toto");
myNames.push("Toto");
myArray2.push("Toto");
console.log(myArray, myNames, myArray2);

// Suppression d'un élément
// '.splice()' => prend en paramètre 2 éléments
//  - Le 1er param sera l'index du premier élément à supprimer
//  - Le 2eme param sera le nombre d'éléments que l'on veut supprimer

myArray.splice(1, 1);
myNames.splice(1, 1);
myArray2.splice(1, 1);
console.log(myArray, myNames, myArray2);
