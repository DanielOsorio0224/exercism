const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

function colorCode(color) {
  const index = colors.indexOf(color);

  if (index === -1) throw new Error("invalid color");

  return index;
}

export class ResistorColorTrio {
  constructor(colors) {
    const codes = colors.map((color) => colorCode(color));
    let value = (codes[0] * 10 + codes[1]) * 10 ** codes[2];
    let unit = "ohms";

    if (value % 1000 === 0) {
      value /= 1000;
      unit = "kilo" + unit;
    }

    this.label = `Resistor value: ${value} ${unit}`;
  }
}
