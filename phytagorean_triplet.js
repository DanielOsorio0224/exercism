export function triplets({ minFactor, maxFactor, sum }) {
  if (minFactor === undefined) minFactor = 2;
  if (maxFactor === undefined) maxFactor = sum;

  let triplets = [];
  for (let i = minFactor; i <= maxFactor; i++) {
    for (let j = i - 1; j <= maxFactor; j++) {
      let a = sum - i - j;
      if (a < 0 || a > i || a > j || a < minFactor || a > maxFactor) continue;
      if (Math.pow(a, 2) + Math.pow(i, 2) === Math.pow(j, 2)) {
        let currentTriplet = new Triplet(a, i, j);
        triplets.unshift(currentTriplet);
      }
    }
  }
  return triplets;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
