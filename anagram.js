export const findAnagrams = (word, anagrams) => {
  const modifiedWord = [...word.toLowerCase()].sort().join("");
  return anagrams.filter(
    (target) =>
      target.toLowerCase() !== word.toLowerCase() &&
      [...target.toLowerCase()].sort().join("") === modifiedWord
  );
};
