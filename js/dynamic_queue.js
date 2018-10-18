class DynamicQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(element) {
        let node = new Node(element);
        if(this.isEmpty()){
            this.head=this.tail=node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    dequeue(){
        if(this.isEmpty()) return null;
        let dead = this.head;
        if(this.length===1){
            this.head=this.tail=null;
        }else{
            this.head = dead.next;
            dead.next=null;
        }
        this.length--;
        return dead.element;
    }
    front() {
        if(this.isEmpty()) return -1;
        return this.head.element;
    }
    back(){
        if(this.isEmpty()) return -1;
        return this.tail.element;
    }
    isEmpty() {
        return this.tail==null;
    }
    size() {
        return this.length;
    }
    clear() {
        this.tail=this.head= null;
    }
    print(separator=" - ") {
        if(!this.head) return "";
        let s = this.head.element,
            current = this.head.next;
            while(current){
                s+= separator + current.element;
                current = current.next;
            }
            return s;
    }
}