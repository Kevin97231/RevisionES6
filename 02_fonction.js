function helloName(name) {
  return name;
}

let name = helloName("Kévin");
console.log(name);
console.log(helloName("Kévin"));

const helloNameFleche = (name) => {
  return name;
};
console.log(helloNameFleche("Kévin"));

const helloNameFleche2 = (name) => name;
console.log(helloNameFleche2("Kévin"));

const myTable = [12, 8, 14, 16];

function moyenne(tableau) {
  let x = 0;

  for (let i = 0; i < myTable.length; i++) {
    // x = x + tabeau[i];
    x += tableau[i];
  }

  return x / tableau.length;
}

console.log(moyenne(myTable));

const moyenneFlechee = (tableau) => {
  let x = 0;

  for (number of tableau) {
    // x = x + number
    x += number;
  }

  return x / tableau.length;
};

console.log(moyenneFlechee(myTable));

console.log("FOR EACH : ");

myTable.forEach(function (number) {
  console.log(number);
});

myTable.forEach((number, index, arr) =>
  console.log(
    `Valur de l'imtem parcourue: ${number}, index: ${index} , arr: ${arr}`
  )
);

let i = 0;
myTable.forEach(() => i++);
console.log(i);
