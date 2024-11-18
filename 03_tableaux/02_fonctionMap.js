const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

let newPerson = persons.map((person) =>
  [person.firstName, person.lastName].join(" ")
);

let newPerson2 = persons.map(
  (person) => person.firstName + " " + person.lastName
);

console.log(newPerson);
console.log(newPerson2);

const chiffres = [1, 2, 3, 4];

// Faire une fonction qui :
// - prend en parametre un tableau
// - retourne un tableau contenant le carré des valeurs du tableau passé en parametre

// ==> SI j'ai [1, 2, 3, 4] en entré -> le fonction doit retourner [1,4,9,16]

const mapCarre = (tableau) => tableau.map((number) => number * number);

console.log(mapCarre(chiffres));

// La fonction flatMap()

let result = chiffres.map((number) => [number * number]);
console.log(result);

let result2 = chiffres.flatMap((number) => [number * number]);
console.log(result2);
