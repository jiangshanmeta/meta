function mostCompetitive (nums: number[], k: number): number[] {
    const helper:number[] = [];
    let start = 0;
    const result:number[] = [];
    let end = nums.length - k;
    for (let i = 0; i < end; i++) {
        while (helper.length > 0 && nums[i] < helper[helper.length - 1]) {
            helper.pop();
        }
        helper.push(nums[i]);
    }
    while (end < nums.length) {
        const num = nums[end++];

        while (helper.length > start && num < helper[helper.length - 1]) {
            helper.pop();
        }
        helper.push(num);
        result.push(helper[start++]);
    }

    return result;
}
