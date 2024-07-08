const go = (groupedDominoes, ungroupedDominoes) =>
  !ungroupedDominoes.length
    ? groupedDominoes[0][0] ===
        groupedDominoes[groupedDominoes.length - 1][1] && groupedDominoes
    : ungroupedDominoes
        .map(
          (domino) =>
            (groupedDominoes[0][0] === domino[1] &&
              go(
                [domino].concat(groupedDominoes),
                ungroupedDominoes.filter((x) => x !== domino)
              )) ||
            (groupedDominoes[0][0] === domino[0] &&
              go(
                [[domino[1], domino[0]]].concat(groupedDominoes),
                ungroupedDominoes.filter((x) => x !== domino)
              ))
        )
        .filter((x) => x)[0];

export const chain = ([firstDomino, ...otherDominoes]) =>
  !firstDomino ? [] : go([firstDomino], otherDominoes) || null;
