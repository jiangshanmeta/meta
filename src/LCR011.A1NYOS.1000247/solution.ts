function findMaxLength (nums: number[]): number {
    const indexs = new Array<number>(2 * nums.length + 1).fill(nums.length);
    indexs[nums.length] = -1;
    let result = 0;
    let diff = 0;
    for (let i = 0; i < nums.length; i++) {
        diff += nums[i] === 1 ? 1 : -1;
        const position = diff + nums.length;
        if (indexs[position] === nums.length) {
            indexs[position] = i;
        } else {
            result = Math.max(result, i - indexs[position]);
        }
    }
    return result;
}
