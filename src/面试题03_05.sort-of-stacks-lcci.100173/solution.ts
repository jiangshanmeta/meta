class SortedStack {
    stack1:number[];
    stack2:number[];
    constructor () {
        this.stack1 = [];
        this.stack2 = [];
    }

    push (val: number): void {
        while (this.stack1.length && this.stack1[this.stack1.length - 1] < val) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(val);
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
    }

    pop (): void {
        if (this.stack1.length === 0) {
            return;
        }
        this.stack1.pop();
    }

    peek (): number {
        if (this.stack1.length === 0) {
            return -1;
        }
        return this.stack1[this.stack1.length - 1];
    }

    isEmpty (): boolean {
        return this.stack1.length === 0;
    }
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
