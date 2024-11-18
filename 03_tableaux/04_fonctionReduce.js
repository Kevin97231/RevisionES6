const myArray = [1, 2, 3, 4];

const SUM_ARRAY = myArray.reduce(
  (total, currentValue) => total + currentValue,
  0
);

console.log(SUM_ARRAY);

// Somme de tous les éléments au carré

const SUM_ARRAY_CARRE = myArray.reduce(
  (total, currentValue) => total + currentValue * currentValue,
  0
);
console.log(SUM_ARRAY_CARRE);
