class Vector2D {
    index1 = 0;
    index2 = 0;
    constructor (protected vec: number[][]) {
        while (this.index1 < this.vec.length && this.vec[this.index1].length === 0) {
            this.index1++;
        }
    }

    next (): number {
        const result = this.vec[this.index1][this.index2++];
        if (this.index2 === this.vec[this.index1].length) {
            this.index2 = 0;
            this.index1++;
            while (this.index1 < this.vec.length && this.vec[this.index1].length === 0) {
                this.index1++;
            }
        }

        return result;
    }

    hasNext (): boolean {
        return this.index1 < this.vec.length;
    }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
