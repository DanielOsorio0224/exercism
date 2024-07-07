const count = (dice, no) => dice.filter((d) => d === no).length,
  multiple = (dice, no) =>
    dice.find((d) => dice.filter((f) => f === d).length === no),
  isStraight = (dice, n) => dice.sort().every((d, i) => d === i + n),
  sum = (dice) => dice.reduce((sum, d) => sum + d, 0);

export const score = (dice, category) => {
  switch (category) {
    case "yacht":
      return dice.every((d) => d === dice[0]) ? 50 : 0;
    case "ones":
      return count(dice, 1);
    case "twos":
      return count(dice, 2) * 2;
    case "threes":
      return count(dice, 3) * 3;
    case "fours":
      return count(dice, 4) * 4;
    case "fives":
      return count(dice, 5) * 5;
    case "sixes":
      return count(dice, 6) * 6;
    case "full house":
      return multiple(dice, 3) && multiple(dice, 2) ? sum(dice) : 0;
    case "four of a kind":
      return (multiple(dice, 4) || multiple(dice, 5) || 0) * 4;
    case "little straight":
      return isStraight(dice, 1) ? 30 : 0;
    case "big straight":
      return isStraight(dice, 2) ? 30 : 0;
    case "choice":
      return sum(dice);
  }
};
