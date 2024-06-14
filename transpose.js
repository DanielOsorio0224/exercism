export const transpose = (matrix) => {
  const w = Math.max(0, ...matrix.map((s) => s.length));
  return [...Array(w)].map((_, i) =>
    matrix.reduceRight((acc, row) => (row[i] || (acc ? " " : "")) + acc, "")
  );
};
