export const proverb = (...input) => {
  let qualifier;

  if (typeof input[input.length - 1] === "object") qualifier = input.pop();

  let output = [];

  for (let i = 0; i < input.length; i++) {
    if (i == input.length - 1) {
      if (qualifier != undefined) {
        output.push(
          `And all for the want of a ${qualifier.qualifier} ${input[0]}.`
        );
      } else {
        output.push(`And all for the want of a ${input[0]}.`);
      }
    } else {
      output.push(`For want of a ${input[i]} the ${input[i + 1]} was lost.`);
    }
  }

  return output.join("\n");
};
