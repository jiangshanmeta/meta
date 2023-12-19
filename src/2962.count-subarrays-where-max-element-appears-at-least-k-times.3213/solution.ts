function countSubarrays (nums: number[], k: number): number {
    const indexs:number[] = [];
    const max = Math.max(...nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            indexs.push(i);
        }
    }

    let result = 0;
    for (let i = k - 1; i < indexs.length; i++) {
        const start = i - (k - 1);
        const L = indexs[start] - (start === 0 ? 0 : indexs[start - 1] + 1);
        result += (L + 1) * (nums.length - indexs[i]);
    }
    return result;
}
