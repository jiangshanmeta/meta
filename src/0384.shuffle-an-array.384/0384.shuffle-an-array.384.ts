class Solution {
    constructor(public nums: number[]) {
        
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        const result = this.nums.slice();
        for(let i=1;i<result.length;i++){
            const index = Math.floor(Math.random()*(i+1));
            const tmp = result[i];
            result[i] = result[index];
            result[index] = tmp;
        }
        return result;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */