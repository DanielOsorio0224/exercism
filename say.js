const digits = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
];
const scale = ["", "thousand", "million", "billion"];

function u1000(no) {
  return no < 20
    ? digits[no]
    : no < 100
    ? tens[Math.floor(no / 10)] + (no % 10 ? "-" + u1000(no % 10) : "")
    : u1000(Math.floor(no / 100)) +
      " hundred " +
      (no % 100 ? u1000(no % 100) : "");
}

export const say = (no) => {
  if (no < 0 || no >= 1e12) {
    throw new Error("Number must be between 0 and 999,999,999,999.");
  }
  if (no === 0) return "zero";

  return no
    .toLocaleString()
    .split(",")
    .map((g, i, chunks) => (Number(g) ? [g, scale[chunks.length - i - 1]] : g))
    .reduce((chunks, g) => (Array.isArray(g) ? chunks.concat(g) : chunks))
    .map((g) => (Number(g) ? u1000(Number(g)) : g))
    .reduce((str, g) => str + " " + g)
    .trim();
};
