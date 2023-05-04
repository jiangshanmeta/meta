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
// zkw 线段树 非递归
class NumArray2 {
    N: number;
    segmentTree:number[]
    constructor (nums: number[]) {
        const N = Math.pow(2, Math.ceil(Math.log2(nums.length + 2)));
        this.N = N;
        this.segmentTree = new Array<number>(this.N * 2).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.segmentTree[i + N + 1] = nums[i];
        }
        for (let i = N - 1; i > 0; i--) {
            this.segmentTree[i] = this.segmentTree[i << 1] + this.segmentTree[(i << 1) | 1];
        }
    }

    update (index: number, val: number): void {
        // 对应叶节点的坐标
        let i = index + this.N + 1;
        this.segmentTree[i] = val;
        i >>= 1;
        // 更新父节点
        while (i > 0) {
            this.segmentTree[i] = this.segmentTree[i << 1] + this.segmentTree[i << 1 | 1];
            i >>= 1;
        }
    }

    sumRange (left: number, right: number): number {
        let result = 0;
        // 处理一下坐标 转化为叶节点 开区间 （原始输入为闭区间）
        left += this.N;
        right += 2 + this.N;
        while (left ^ right ^ 1) {
            // 如果left是左节点 那么对应的兄弟节点要被计算在内
            if ((~left) & 1) {
                result += this.segmentTree[left ^ 1];
            }
            // 如果right是右节点 那么对应的兄弟节点要被计算在内
            if (right & 1) {
                result += this.segmentTree[right ^ 1];
            }
            left >>= 1;
            right >>= 1;
        }
        return result;
    }
}
