function maxSlidingWindow (nums: number[], k: number): number[] {
    const helper:number[] = [];
    let index = 0;
    while (index < k - 1) {
        while (helper.length && helper[helper.length - 1] < nums[index]) {
            helper.pop();
        }
        helper.push(nums[index++]);
    }
    const result:number[] = [];
    while (index < nums.length) {
        while (helper.length && helper[helper.length - 1] < nums[index]) {
            helper.pop();
        }
        helper.push(nums[index++]);
        result.push(helper[0]);
        if (nums[index - k] === helper[0]) {
            helper.shift();
        }
    }
    return result;
}
