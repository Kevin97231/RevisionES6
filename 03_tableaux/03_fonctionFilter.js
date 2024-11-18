const words = ["spray", "elite", "exuberant", "destruction", "present"];

const WORDS_FILTER = words.filter((word) => {
  return word.length > 6;
});

console.log(WORDS_FILTER);

const textFilter = (entreeUtilisateur) => {
  return words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);
};

console.log(textFilter("es"));
