const MAX = 10 ** 9;

class MyCalendar {
    values:number[] = [0, ]
    deltas:number[] = [0, ]
    leftIndexs:number[] = []
    rightIndexs:number[] = []
    count = 1;
    constructor () {

    }

    private pushDown (index:number) {
        if (!this.leftIndexs[index]) {
            const leftIndex = this.count++;
            this.leftIndexs[index] = leftIndex;
            this.values[leftIndex] = 0;
            this.deltas[leftIndex] = 0;
        }
        if (!this.rightIndexs[index]) {
            const rightIndex = this.count++;
            this.rightIndexs[index] = rightIndex;
            this.values[rightIndex] = 0;
            this.deltas[rightIndex] = 0;
        }

        const leftIndex = this.leftIndexs[index];
        const rightIndex = this.rightIndexs[index];
        this.values[leftIndex] += this.deltas[index];
        this.deltas[leftIndex] += this.deltas[index];
        this.values[rightIndex] += this.deltas[index];
        this.deltas[rightIndex] += this.deltas[index];
        this.deltas[index] = 0;
    }

    private update (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        updateL:number,
        updateR:number
    ) {
        if (rangeL === updateL && rangeR === updateR) {
            this.values[rootIndex]++;
            this.deltas[rootIndex]++;
            return;
        }
        this.pushDown(rootIndex);
        const mid = Math.floor((rangeL + rangeR) / 2);
        const leftRootIndex = this.leftIndexs[rootIndex];
        const rightRootIndex = this.rightIndexs[rootIndex];
        if (updateL > mid) {
            this.update(rightRootIndex, mid + 1, rangeR, updateL, updateR);
        } else if (updateR < mid + 1) {
            this.update(leftRootIndex, rangeL, mid, updateL, updateR);
        } else {
            this.update(leftRootIndex, rangeL, mid, updateL, mid);
            this.update(rightRootIndex, mid + 1, rangeR, mid + 1, updateR);
        }

        this.values[rootIndex] = Math.max(this.values[leftRootIndex], this.values[rightRootIndex]);
    }

    private query (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        queryL:number,
        queryR:number
    ):number {
        if (rangeL === queryL && rangeR === queryR) {
            return this.values[rootIndex];
        }
        this.pushDown(rootIndex);
        const mid = Math.floor((rangeL + rangeR) / 2);
        const leftRootIndex = this.leftIndexs[rootIndex];
        const rightRootIndex = this.rightIndexs[rootIndex];
        if (queryL > mid) {
            return this.query(rightRootIndex, mid + 1, rangeR, queryL, queryR);
        } else if (queryR < mid + 1) {
            return this.query(leftRootIndex, rangeL, mid, queryL, queryR);
        } else {
            return Math.max(
                this.query(leftRootIndex, rangeL, mid, queryL, mid),
                this.query(rightRootIndex, mid + 1, rangeR, mid + 1, queryR)
            );
        }
    }

    book (start: number, end: number): boolean {
        if (this.query(0, 0, MAX, start, end - 1) !== 0) {
            return false;
        }
        this.update(0, 0, MAX, start, end - 1);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
