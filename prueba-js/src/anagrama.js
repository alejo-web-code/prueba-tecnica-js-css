export default (word1, word2) => {
  return parse(word1) === parse(word2);
};

const parse = (string) => {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
}
  