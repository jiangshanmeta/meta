class ZigzagIterator {
    index1 = 0;
    index2 = 0;
    isFirst:boolean;
    constructor (protected v1: number[], protected v2: number[]) {
        this.isFirst = this.v1.length > 0;
    }

    next (): number {
        if (this.isFirst) {
            const result = this.v1[this.index1++];
            if (this.index2 < this.v2.length) {
                this.isFirst = false;
            }
            return result;
        } else {
            const result = this.v2[this.index2++];
            if (this.index1 < this.v1.length) {
                this.isFirst = true;
            }
            return result;
        }
    }

    hasNext (): boolean {
        return this.index1 < this.v1.length || this.index2 < this.v2.length;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * while (obj.hasNext()) ret.push(obj.next());
 */
