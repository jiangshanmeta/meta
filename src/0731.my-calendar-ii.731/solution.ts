const MAX = 10 ** 9;

class MyCalendarTwo {
    values:number[] = [0, ];
    deltas:number[] = [0, ];
    leftIndexs:number[] = [];
    rightIndexs:number[] =[];
    count = 1;
    constructor () {

    }

    private pushDown (index:number) {
        if (!this.leftIndexs[index]) {
            const id = this.count++;
            this.leftIndexs[index] = id;
            this.deltas[id] = 0;
            this.values[id] = 0;
        }

        if (!this.rightIndexs[index]) {
            const id = this.count++;
            this.rightIndexs[index] = id;
            this.deltas[id] = 0;
            this.values[id] = 0;
        }
        const leftIndex = this.leftIndexs[index];
        const rightIndex = this.rightIndexs[index];
        this.values[leftIndex] += this.deltas[index];
        this.deltas[leftIndex] += this.deltas[index];
        this.values[rightIndex] += this.deltas[index];
        this.deltas[rightIndex] += this.deltas[index];
        this.deltas[index] = 0;
    }

    private query (rootIndex:number, rangeL:number, rangeR:number, queryL:number, queryR:number):number {
        if (rangeL === queryL && rangeR === queryR) {
            return this.values[rootIndex];
        }
        this.pushDown(rootIndex);
        const leftRootIndex = this.leftIndexs[rootIndex];
        const rightRootIndex = this.rightIndexs[rootIndex];
        const mid = Math.floor((rangeL + rangeR) / 2);
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

    private update (rootIndex:number, rangeL:number, rangeR:number, queryL:number, queryR:number) {
        if (rangeL === queryL && rangeR === queryR) {
            this.deltas[rootIndex]++;
            this.values[rootIndex]++;
            return;
        }
        this.pushDown(rootIndex);
        const leftRootIndex = this.leftIndexs[rootIndex];
        const rightRootIndex = this.rightIndexs[rootIndex];
        const mid = Math.floor((rangeL + rangeR) / 2);
        if (queryL > mid) {
            this.update(rightRootIndex, mid + 1, rangeR, queryL, queryR);
        } else if (queryR < mid + 1) {
            this.update(leftRootIndex, rangeL, mid, queryL, queryR);
        } else {
            this.update(leftRootIndex, rangeL, mid, queryL, mid);
            this.update(rightRootIndex, mid + 1, rangeR, mid + 1, queryR);
        }

        this.values[rootIndex] = Math.max(this.values[leftRootIndex], this.values[rightRootIndex]);
    }

    book (start: number, end: number): boolean {
        if (this.query(0, 0, MAX, start, end - 1) === 2) {
            return false;
        }
        this.update(0, 0, MAX, start, end - 1);
        return true;
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
