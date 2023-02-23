function goodIndices (nums: number[], k: number): number[] {
    const decrease = new Array<number>(nums.length);
    decrease[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            decrease[i] = decrease[i - 1] + 1;
        } else {
            decrease[i] = 1;
        }
    }
    const increase = new Array<number>(nums.length);
    increase[increase.length - 1] = 1;
    for (let i = increase.length - 2; i > -1; i--) {
        if (nums[i] <= nums[i + 1]) {
            increase[i] = increase[i + 1] + 1;
        } else {
            increase[i] = 1;
        }
    }
    const result:number[] = [];
    for (let i = k; i < nums.length - k; i++) {
        if (decrease[i - 1] >= k && increase[i + 1] >= k) {
            result.push(i);
        }
    }
    return result;
}
