export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    const sharps = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
    ];

    const flats = [
      "A",
      "Bb",
      "B",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
    ];

    const keySigs = {
      natural: ["C", "a"],

      sharp: ["G", "D", "A", "E", "B", "F#", "e", "b", "f#", "c#", "g#", "d#"],

      flat: ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"],
    };

    const keySig = Object.entries(keySigs).filter(([key, value]) => {
      return value.some((item) => item === this.tonic);
    })[0][0];

    if (keySig === "natural" || keySig === "sharp") {
      let index = sharps.indexOf(this.tonic);

      if (index === -1) {
        index = sharps.indexOf(this.tonic.toUpperCase());
      }

      return sharps.slice(index).concat(sharps.slice(0, index));
    }

    if (keySig === "flat") {
      let index = flats.indexOf(this.tonic);

      if (index === -1) {
        index = flats.indexOf(
          this.tonic[0].toUpperCase() + (this.tonic[1] ? this.tonic[1] : "")
        );
      }

      return flats.slice(index).concat(flats.slice(0, index));
    }
  }

  interval(intervals) {
    const steps = intervals.split("");

    const stepVals = {
      M: 2,

      m: 1,

      A: 3,
    };

    const result = [];

    const chromatic = this.chromatic(this.tonic);

    let stepsIndex = 0;

    result.push(chromatic[0]);

    for (
      let i = 0 + stepVals[steps[stepsIndex]];
      i < 12;
      i += stepVals[steps[stepsIndex]]
    ) {
      result.push(chromatic[i]);

      stepsIndex++;
    }

    const tonic =
      this.tonic[0].toUpperCase() + (this.tonic[1] ? this.tonic[1] : "");

    return result.concat(tonic);
  }
}
