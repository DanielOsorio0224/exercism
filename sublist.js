export class List {
  constructor(array = []) {
    this.elements = array;
  }

  compare(list) {
    return this.equals(list)
      ? "EQUAL"
      : this.isSublist(list)
      ? "SUBLIST"
      : list.isSublist(this)
      ? "SUPERLIST"
      : "UNEQUAL";
  }

  equals(list) {
    return array_equals(this.elements, list.elements);
  }

  isSublist(list) {
    const len = this.elements.length;
    return list.elements.some((_, i) =>
      array_equals(list.elements.slice(i, i + len), this.elements)
    );
  }
}

function array_equals(a, b) {
  return a.length === b.length && a.every((ai, i) => ai === b[i]);
}
