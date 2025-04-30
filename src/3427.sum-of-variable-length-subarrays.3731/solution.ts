function subarraySum (nums: number[]): number {
    let result = 0;
    const prefixs = new Array<number>(nums.length + 1);
    prefixs[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixs[i + 1] = prefixs[i] + nums[i];
        const start = Math.max(0, i - nums[i]);
        result += prefixs[i + 1] - prefixs[start];
    }
    return result;
}
