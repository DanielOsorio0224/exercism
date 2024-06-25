export class Forth {
  constructor() {
    this.stack = [];
    this.words = {};
  }

  static validOps = ["+", "-", "*", "/", "swap", "over", "dup", "drop"];

  evaluate(str) {
    let stream = str.split(" ").map((x) => x.toLowerCase());
    let fOperand, sOperand;

    if (stream[0] == ":" && stream.at(-1) == ";") {
      if (Number.isInteger(Number(stream[1])))
        throw new Error("Invalid definition");

      this.words[stream[1]] = stream
        .slice(2, -1)
        .flatMap((x) => this.words[x] ?? x);
    } else {
      stream = stream.flatMap((x) => this.words[x] ?? x);

      for (const elem of stream) {
        if (Number.isInteger(Number(elem))) {
          this.stack.push(Number(elem));
        } else {
          if (
            (Forth.validOps.slice(6, 8).includes(elem) &&
              this.stack.length < 1) ||
            (Forth.validOps.slice(0, 6).includes(elem) && this.stack.length < 2)
          )
            throw new Error("Stack empty");

          if (Forth.validOps.slice(0, 4).includes(elem)) {
            sOperand = this.stack.pop();
            fOperand = this.stack.pop();
          }

          switch (elem) {
            case "+":
              this.stack.push(fOperand + sOperand);
              break;
            case "-":
              this.stack.push(fOperand - sOperand);
              break;
            case "*":
              this.stack.push(fOperand * sOperand);
              break;
            case "/":
              if (sOperand === 0) throw new Error("Division by zero");
              this.stack.push(Math.floor(fOperand / sOperand));
              break;
            case "dup":
              this.stack.push(this.stack.at(-1));
              break;
            case "drop":
              this.stack.pop();
              break;
            case "swap":
              this.stack.splice(-1, 0, this.stack.pop());
              break;
            case "over":
              this.stack.push(this.stack.at(-2));
              break;
            default:
              throw new Error("Unknown command");
          }
        }
      }
    }
  }
}
