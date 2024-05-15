export const classify = (num) => {
  if (num <= 0)
    throw new Error("Classification is only possible for natural numbers.");
  let total = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      total += i;
    }
  }
  console.log(total);
  if (total === num) {
    return "perfect";
  } else if (total > num) {
    return "abundant";
  } else {
    return "deficient";
  }
};
