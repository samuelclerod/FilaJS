
class DynamicQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(element){
        let newNode = new Node(element);
        if(this.head==null){
            this.head=newNode;
        }else {
            this.tail.next=newNode;
        }
        this.tail=newNode;
        this.count++;
    }

    dequeue(){
    }

    front(){
        if(this.isEmpty()) return null; 
        return this.head.content;
    }

    back(){
        if(this.isEmpty()) return null;
        return this.tail.content;
    }

    isEmpty(){
        return this.head==null;
    }

    size(){
        return this.count;
    }

    clear(){
        this.head=this.tail=null;
        this.count=0;
    }

    print(separator=''){
    }
}


class Node{
    constructor(element){
        this.content = element;
        this.next = null;
    }
}