class NumArray {
    segmentTree:number[];
    N:number;
    constructor (nums: number[]) {
        this.segmentTree = new Array(nums.length * 4).fill(0);
        this.N = nums.length;
        for (let i = 0; i < nums.length; i++) {
            this.updateSegmentTree(0, 0, this.N - 1, i, nums[i]);
        }
    }

    updateSegmentTree (rootIndex:number, rangeL:number, rangeR:number, target:number, val:number) {
        if (rangeL === rangeR && rangeL === target) {
            this.segmentTree[rootIndex] = val;
            return;
        }
        const mid = rangeL + ((rangeR - rangeL) >> 1);
        const leftIndex = 2 * rootIndex + 1;
        const rightIndex = 2 * rootIndex + 2;
        if (target > mid) {
            this.updateSegmentTree(rightIndex, mid + 1, rangeR, target, val);
        } else {
            this.updateSegmentTree(leftIndex, rangeL, mid, target, val);
        }
        this.segmentTree[rootIndex] = this.segmentTree[leftIndex] + this.segmentTree[rightIndex];
    }

    update (index: number, val: number): void {
        this.updateSegmentTree(0, 0, this.N - 1, index, val);
    }

    sumRange (left: number, right: number): number {
        return this.querySegmentTree(0, 0, this.N - 1, left, right);
    }

    querySegmentTree (rootIndex:number, rangeL:number, rangeR:number, queryL:number, queryR:number):number {
        if (rangeL === queryL && rangeR === queryR) {
            return this.segmentTree[rootIndex];
        }
        const mid = rangeL + ((rangeR - rangeL) >> 1);
        const leftIndex = 2 * rootIndex + 1;
        const rightIndex = 2 * rootIndex + 2;
        if (queryL > mid) {
            return this.querySegmentTree(rightIndex, mid + 1, rangeR, queryL, queryR);
        } else if (queryR < mid + 1) {
            return this.querySegmentTree(leftIndex, rangeL, mid, queryL, queryR);
        } else {
            return this.querySegmentTree(leftIndex, rangeL, mid, queryL, mid) + this.querySegmentTree(rightIndex, mid + 1, rangeR, mid + 1, queryR);
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
