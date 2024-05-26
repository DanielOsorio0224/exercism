export const parse = (phrase) => {
  return phrase
    .toUpperCase()
    .match(/[A-Z']+/g)
    .map((word) => word[0])
    .join("");
};
