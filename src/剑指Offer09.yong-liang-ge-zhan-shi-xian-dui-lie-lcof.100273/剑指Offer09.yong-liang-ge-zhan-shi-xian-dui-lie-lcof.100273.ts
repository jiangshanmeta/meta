class CQueue {
    stack1:number[];
    stack2:number[];
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    appendTail(value: number): void {
        this.stack1.push(value);
    }

    deleteHead(): number {
        if(this.stack1.length === 0 && this.stack2.length === 0){
            return -1;
        }

        if(this.stack2.length === 0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop()!);
            }
        }

        return this.stack2.pop()!
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */