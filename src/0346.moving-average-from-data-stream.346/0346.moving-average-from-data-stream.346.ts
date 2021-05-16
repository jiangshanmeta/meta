class MovingAverage {
    seq:number[] = [];
    sum = 0;
    constructor (private size: number) {

    }

    next (val: number): number {
        this.sum += val;
        this.seq.push(val);
        if (this.seq.length > this.size) {
            this.sum -= this.seq.shift();
        }
        return this.sum / this.seq.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
