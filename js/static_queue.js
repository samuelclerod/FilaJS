class StaticQueue{

    constructor(){
        this.data = new Array(20);
        this.count = 0
    }

    enqueue(element){
        this.data[this.count]=element;
        this.count++;
    }

    dequeue(){
        if(this.count>0){
            this.count--;
            return this.data.shift();
        }
        return null;
    }

    front(){
        return this.data[0];
    }

    back(){
        return this.data[this.count-1]
    }

    isEmpty(){
        return this.count==0
    }

    size(){
        return this.count;
    }

    clear(){
        this.count=0
    }

    print(separator=''){
        let output = '';
        for(let i = 0; i<this.count; i++)
            output+=this.data[i]+separator;
        return output.substr(0, output.length-separator.length);
    }

}










