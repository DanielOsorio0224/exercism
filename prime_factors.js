export const primeFactors = (num) => {
  let result = [];
  if (num <= 1) return result;
  for (let i = 2; i <= num; ) {
    num % i === 0 ? result.push(i) && (num /= i) : i++;
  }
  return result;
};
