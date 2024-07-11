const A = "A".charCodeAt(0);

export const rows = (c) => {
  const space = c.charCodeAt(0) - A;
  const quarter = Array(space + 1)
    .fill("")
    .map(
      (_, i) =>
        " ".repeat(space - i) + String.fromCharCode(A + i) + " ".repeat(i)
    );
  const half = quarter.map((s) => s + [...s].reverse().slice(1).join(""));

  return half.concat(half.slice(0, -1).reverse());
};
