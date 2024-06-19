export const spiralMatrix = (num) => {
  const result = [];
  let next = 0;

  for (let i = 0; i < num; i++) {
    result.map((row) => (row.unshift(next++), row));
    result.push([...Array(i + 1)].map((_) => next++));
    result.reverse();
    result.map((row) => row.reverse());
  }
  return result.map((row) => row.map((k) => num * num - k));
};
