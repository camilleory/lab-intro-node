class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort(function (a, b) {
      return a - b;
    });
    return this.items;
  }


  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      let highestValue = Math.max(...this.items);
      return highestValue;
    }
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      let lowestValue = Math.min(...this.items);
      return lowestValue;
    }
  }


  sum() {
    if (this.items.length <= 0) {
      return 0
    } else {
      this.items.reduce(
        (accumulator, currentValue) =>
        accumulator + currentValue, 0
      )
    }
  }


  avg() {}
}

module.exports = SortedList;

//let obj = new SortedList(items, length);