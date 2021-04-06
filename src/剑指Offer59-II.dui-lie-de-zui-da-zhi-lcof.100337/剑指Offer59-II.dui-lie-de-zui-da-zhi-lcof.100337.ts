class MaxQueue {
    private queen1:number[];
    private queen2:number[];
    constructor () {
        this.queen1 = [];
        this.queen2 = [];
    }

    max_value (): number {
        if (this.queen2.length) {
            return this.queen2[0];
        } else {
            return -1;
        }
    }

    push_back (value: number): void {
        this.queen1.push(value);
        while (this.queen2.length && this.queen2[this.queen2.length - 1] < value) {
            this.queen2.pop();
        }
        this.queen2.push(value);
    }

    pop_front (): number {
        if (this.queen1.length === 0) {
            return -1;
        }
        const value = this.queen1.shift();
        if (this.queen2[0] === value) {
            this.queen2.shift();
        }
        return value;
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
