class StaticQueue {
  constructor() {
    this.data = [];
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.data.push(element);
    } else {
      this.data.push(element);
    }
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Fila Vazia!!");
    return this.data.shift();
  }

  front() {
    if (!this.isEmpty()) {
      return this.data[0];
    }
  }

  back() {
    if (!this.isEmpty()) {
      return this.data[this.data.length - 1];
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  print(separator = " - ") {
    return this.data.join(separator);
  }
}
