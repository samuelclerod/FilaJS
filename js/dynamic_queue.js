class DynamicQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(element) {
        let node = new Node(element);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    dequeue(){
        let deadElement = null;
        if(this.length===1){
            deadElement = this.tail.content;
            this.clear();
        }else if(this.length>1){
            let deadNode = this.head;
            this.head = this.head.next;
            deadNode.next = null;
            deadElement = deadNode.content;
            this.length--;
        }
        return deadElement;
    }
    front() {
        return this.head.content;
    }
    back() {
        return this.tail.content;
    }
    isEmpty() {
        return this.tail===null;
    }
    size() {
        return this.length;
    }
    clear() {
        this.tail= this.head=null;
        this.length=0;
    }
    print(separator=" - ") {
        let output = "";
        for (let node = this.head; node!=null; node = node.next) {
            output+=node.content+separator;
        }
        return output.substr(0, output.length-separator.length);
    }
}