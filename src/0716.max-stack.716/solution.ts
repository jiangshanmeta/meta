class MaxStack {
    stack1:number[] = [];
    stack2:number[] = [];
    constructor () {

    }

    push (x: number): void {
        this.stack1.push(x);
        if (this.stack2.length === 0 || x >= this.stack2[this.stack2.length - 1]) {
            this.stack2.push(x);
        } else {
            this.stack2.push(this.stack2[this.stack2.length - 1]);
        }
    }

    pop (): number {
        this.stack2.pop();
        return this.stack1.pop();
    }

    top (): number {
        return this.stack1[this.stack1.length - 1];
    }

    peekMax (): number {
        return this.stack2[this.stack2.length - 1];
    }

    popMax (): number {
        const result = this.stack2[this.stack2.length - 1];
        const tmp:number[] = [];
        while (this.stack1[this.stack1.length - 1] !== result) {
            this.stack2.pop();
            tmp.push(this.stack1.pop());
        }
        this.stack1.pop();
        this.stack2.pop();
        while (tmp.length) {
            this.push(tmp.pop());
        }

        return result;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
