class DynamicQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(element) {
        const newnode = new Node(element);
        if (this.isEmpty()) {
            this.head = newnode;
        } else {
            this.tail.next = newnode;
        }
        this.tail = newnode;
    }
    dequeue() {
        if (this.isEmpty())
            throw new Error("Fila vazia!");
        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        if (this.head === null) this.tail = null;
        return removed.content;
    }
    front() {
        return this.head.content;
    }
    back() {
        return this.tail.content;
    }
    isEmpty() {
        return this.head === null;
    }
    size() {
        let counter = 0;
        for (let i = this.head; i !== null; i = i.next)
            counter++;
        return counter;
    }
    clear() {
        this.head = this.tail = null;
    }

    print(separator = " - ") {
        let output = '';
        for (let i = this.head; i !== null; i = i.next)
            output += i.content + separator;
        return output.substr(0, output.length - separator.length);
    }
}