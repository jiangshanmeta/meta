function largestSubarray (nums: number[], k: number): number[] {
    function isGreater (index1:number, index2:number) {
        for (let i = 0; i < k; i++) {
            if (nums[index1 + i] > nums[index2 + i]) {
                return true;
            } else if (nums[index1 + i] < nums[index2 + i]) {
                return false;
            }
        }
        return false;
    }
    let start = 0;
    for (let i = 1; i < nums.length - k + 1; i++) {
        if (isGreater(i, start)) {
            start = i;
        }
    }
    return nums.slice(start, start + k);
}
