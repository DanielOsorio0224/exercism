export const isIsogram = (phrase) => {
  return !/(\w).*\1/i.test(phrase);
};
