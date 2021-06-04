class ProductOfNumbers {
    sequence:number[];
    zeroIndex = -1;
    constructor () {
        this.sequence = [1, ];
    }

    add (num: number): void {
        if (num === 0) {
            this.zeroIndex = this.sequence.length;
            this.sequence.push(1);
        } else {
            const last = this.sequence[this.sequence.length - 1];
            this.sequence.push(last * num);
        }
    }

    getProduct (k: number): number {
        const startIndex = this.sequence.length - 1 - k;
        if (startIndex < this.zeroIndex) {
            return 0;
        }
        const a = this.sequence[startIndex];
        return this.sequence[this.sequence.length - 1] / a;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
