export const valid = (num) => {
  if (/[^0-9 ]/.test(num) || num.trim().length <= 1) {
    return false;
  }

  const sum = [...num.replaceAll(" ", "")]
    .reverse()
    .map((c, i) => (i % 2 ? (c < 5 ? c * 2 : c * 2 - 9) : c))
    .reduce((total, c) => total + Number(c), 0);

  return sum % 10 === 0;
};
