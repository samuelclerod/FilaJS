class StaticQueue {
    constructor() {
        this.data = [];
    }
    enqueue(element) {
        this.data.push(element);
        console.table(this.data);
    }
    dequeue() {
        if (this.data.length === 0)
            throw new Error("Fila vazia!")
        const removedElement = this.data.shift()
        console.table(this.data);
        return removedElement;
    }
    front() {
        return this.data[0];
    }
    back() {
        const lastIndex = this.data.length - 1;
        return this.data[lastIndex];
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