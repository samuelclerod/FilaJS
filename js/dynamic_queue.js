class DynamicQueue {
    constructor() {
        this.head
        this.tail
    }
    enqueue(element) {
        const newNode = new Node(element)
        if (this.head == null) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
    }
    dequeue() {
        const removed = this.head;
        this.head = this.head.next
        removed.next == null
        return removed.content
    }
    front() {
        if (this.isEmpty()) return null
        return this.head.content

    }
    back() {
        if (this.isEmpty()) return null
        return this.tail.content
    }
    isEmpty() {
        return this.head == null
    }
    size() {
        let counter = 0
        this._forEach(n => counter++)
        return counter
    }
    clear() {
        this.head = this.tail = null
    }
    print(separator = " - ") {
        let output = new String()
        this._forEach(n => output += n + separator)
        return this._removeLastSeparator(output, separator)
    }

    _removeLastSeparator(text, separator) {
        if (text.length == 0) return text
        return text.substring(0, (text.length - separator.length))
    }

    _forEach(callback) {
        let current = this.head
        while (current != null) {
            callback(current.content)
            current = current.next
        }
    }
}