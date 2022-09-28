class CustomStack {
    numStack:number[];
    incStack:number[];
    index = -1;
    constructor (maxSize: number) {
        this.numStack = new Array(maxSize);
        this.incStack = new Array(maxSize).fill(0);
    }

    push (x: number): void {
        if (this.index === this.numStack.length - 1) {
            return;
        }
        this.numStack[++this.index] = x;
    }

    pop (): number {
        if (this.index === -1) {
            return -1;
        }
        const val = this.numStack[this.index];
        const inc = this.incStack[this.index];
        this.incStack[this.index--] = 0;
        if (this.index !== -1) {
            this.incStack[this.index] += inc;
        }

        return val + inc;
    }

    increment (k: number, val: number): void {
        if (this.index === -1) {
            return;
        }

        this.incStack[Math.min(this.index, k - 1)] += val;
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
