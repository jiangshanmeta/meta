const MAX = 10 ** 9;

class MyCalendarThree {
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

    book (startTime: number, endTime: number): number {
        this.update(0, 0, MAX, startTime, endTime - 1);
        return this.values[0];
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */
