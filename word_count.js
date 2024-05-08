export const countWords = (word) => {
  return word
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});
};
