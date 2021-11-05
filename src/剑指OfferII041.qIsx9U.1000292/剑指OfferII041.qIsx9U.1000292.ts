class MovingAverage {
    queen:number[];
    sum = 0;
    constructor (private size: number) {
        this.queen = [];
    }

    next (val: number): number {
        this.queen.push(val);
        this.sum += val;
        if (this.queen.length > this.size) {
            this.sum -= this.queen.shift();
        }
        return this.sum / this.queen.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
