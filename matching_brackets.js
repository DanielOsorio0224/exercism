const bracketMap = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const bracketCharacters = (stack) => stack.match(/[([{}\])]/g) || [];
const isOpenBracket = (bracket) => !!bracketMap[bracket];
const arePairedBrackets = (openBracket, closeBracket) =>
  bracketMap[openBracket] === closeBracket;
const empityStack = (stack) => stack.length === 0;

export const isPaired = (brackets) => {
  const openBracketStack = [];
  return (
    bracketCharacters(brackets).every((bracket) =>
      isOpenBracket(bracket)
        ? openBracketStack.push(bracket)
        : arePairedBrackets(openBracketStack.pop(), bracket)
    ) && empityStack(openBracketStack)
  );
};
