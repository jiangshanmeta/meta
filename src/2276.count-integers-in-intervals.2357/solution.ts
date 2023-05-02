const MAX = 10 ** 9;

class CountIntervals {
    values: number[] = [0, ]
    marks: boolean[] = [false, ]
    leftIndexs:number[] = []
    rightIndexs:number[] = [];
    autoIncreaseId = 1
    constructor () {

    }

    private update (
        rootIndex:number,
        rangeL:number,
        rangeR:number,
        updateL:number,
        updateR:number
    ) {
        if (rangeL === updateL && rangeR === updateR) {
            this.values[rootIndex] = rangeR - rangeL + 1;
            this.marks[rootIndex] = true;
            return;
        }

        if (!this.leftIndexs[rootIndex]) {
            const leftIndex = this.autoIncreaseId++;
            this.leftIndexs[rootIndex] = leftIndex;
            this.values[leftIndex] = 0;
            this.marks[leftIndex] = false;
        }

        if (!this.rightIndexs[rootIndex]) {
            const rightIndex = this.autoIncreaseId++;
            this.rightIndexs[rootIndex] = rightIndex;
            this.values[rightIndex] = 0;
            this.marks[rightIndex] = false;
        }
        const leftIndex = this.leftIndexs[rootIndex];
        const rightIndex = this.rightIndexs[rootIndex];
        const mid = Math.floor((rangeL + rangeR) / 2);
        if (this.marks[rootIndex]) {
            this.values[leftIndex] = mid - rangeL + 1;
            this.marks[leftIndex] = true;
            this.values[rightIndex] = rangeR - mid;
            this.marks[rightIndex] = true;
            this.marks[rootIndex] = false;
        }

        if (updateL > mid) {
            this.update(rightIndex, mid + 1, rangeR, updateL, updateR);
        } else if (updateR < mid + 1) {
            this.update(leftIndex, rangeL, mid, updateL, updateR);
        } else {
            this.update(leftIndex, rangeL, mid, updateL, mid);
            this.update(rightIndex, mid + 1, rangeR, mid + 1, updateR);
        }

        this.values[rootIndex] = this.values[rightIndex] + this.values[leftIndex];
    }

    add (left: number, right: number): void {
        this.update(
            0,
            0,
            MAX,
            left,
            right
        );
    }

    count (): number {
        return this.values[0];
    }
}

/**
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */
