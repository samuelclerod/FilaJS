class DynamicQueue{
    constructor(){
        this.head = this.tail = null;
        this.length = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if(this.isEmpty()){
            this.head = this.tail = newNode
        }else { 
            this.tail.next = newNode;
            this.tail = newNode

        }
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('A fila está vazia');
        }
        const removed = this.head;
        this.head = this.head.next;
        if(this.head===null){
            this.tail = null;
        }
        removed.next = null;
        this.length--
        return removed.content;

    }
    front() {
        if(!this.isEmpty()){
            return this.head.content
        }
    }

    back(){
        if(!this.isEmpty()){
            return this.tail.content
        }
    }

    isEmpty() {
        return this.length===0
    }

    size() {
        return this.length
    }

    clear() {
        this.head = this.tail = null;
        this.length = 0;
    }

    print(separator=" - ") {
        let current = this.head, output = ''
        while(current!==null){
            output += separator + current.content
            current =current.next;
        }
        if(this.isEmpty()){
            return '';
        }
        return output.substring(separator.length);
    }
}