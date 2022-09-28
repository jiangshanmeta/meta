class MyStack {
    private queue:number[];
    constructor () {
        this.queue = [];
    }

    push (x: number): void {
        let count = this.queue.length;
        this.queue.push(x);
        while (count) {
            this.queue.push(this.queue.shift());
            count--;
        }
    }

    pop (): number {
        return this.queue.shift();
    }

    top (): number {
        return this.queue[0];
    }

    empty (): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
