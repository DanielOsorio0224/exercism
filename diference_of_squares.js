export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let y = 1; y <= this.number; y++) {
      sum += y * y;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let y = 1; y <= this.number; y++) {
      sum += y;
    }
    return sum * sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
