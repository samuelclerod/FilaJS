class StaticQueue{
    constructor(){
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    front() {
        if(this.items.length===0) return -1;
        return this.items[0];
    }
    back(){
        return this.items.length-1;
    }
    isEmpty() {
        return this.items.length===0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items=[];
    }
    print(separator=" - ") {
        return this.items.join(separator);
    }
}