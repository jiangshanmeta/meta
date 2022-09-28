class MinStack {
    public stack1:number[];
    public stack2:number[];
    constructor () {
        this.stack1 = [];
        this.stack2 = [];
    }

    push (x: number): void {
        this.stack1.push(x);
        if (this.stack2.length === 0 || x <= this.stack2[this.stack2.length - 1]) {
            this.stack2.push(x);
        }
    }

    pop (): void {
        const val = this.stack1.pop();
        if (val === this.stack2[this.stack2.length - 1]) {
            this.stack2.pop();
        }
    }

    top (): number {
        return this.stack1[this.stack1.length - 1];
    }

    getMin (): number {
        return this.stack2[this.stack2.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
