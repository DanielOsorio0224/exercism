const euclidean = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

export class Rational {
  constructor(a, b) {
    this.a = b < 0 ? -a : a;
    this.b = b < 0 ? -b : b;
  }

  add(r) {
    return new Rational(this.a * r.b + r.a * this.b, this.b * r.b).reduce();
  }

  sub(r) {
    return new Rational(this.a * r.b - r.a * this.b, this.b * r.b).reduce();
  }

  mul(r) {
    return new Rational(this.a * r.a, this.b * r.b).reduce();
  }

  div(r) {
    return new Rational(this.a * r.b, r.a * this.b).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b)).reduce();
  }

  exprational(n) {
    return new Rational(Math.pow(this.a, n), Math.pow(this.b, n)).reduce();
  }

  expreal(x) {
    return (x ** (1 / this.b)) ** this.a;
  }

  reduce() {
    const gcd = euclidean(this.a, this.b);
    return new Rational(this.a / gcd, this.b / gcd);
  }
}
