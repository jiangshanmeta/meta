class NumArray {
    private list:number[];
    constructor(nums: number[]) {
        this.list = [0];
        for(let i=0;i<nums.length;i++){
            this.list[i+1] = this.list[i]+nums[i];
        }
    }

    sumRange(i: number, j: number): number {
        return this.list[j+1]-this.list[i];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */