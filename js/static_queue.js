class StaticQueue {
    constructor() {
        this.data = new Array()
        this.head = 0
        this.tail = -1
    }
    enqueue(element) {
        this.tail++
        this.data[this.tail] = element
    }
    dequeue() {
        this.tail--
        return this.data.shift();
    }
    front() {
        return this.data[this.head]
    }
    back() {
        return this.data[this.tail]
    }
    isEmpty() {
        return this.tail == -1
    }
    size() {
        return this.tail + 1
    }
    clear() {
        this.tail = -1
    }
    print(separator = " - ") {
        let output = ""
        for (let i = 0; i <= this.tail; i++)
            output += this.data[i] + separator
        return this._removeLastSeparator(output, separator);
    }
    _removeLastSeparator(text = '', separator = '') {
        if (text.length > 0)
            return text.substring(0, text.length - separator.length)
        return text
    }

}