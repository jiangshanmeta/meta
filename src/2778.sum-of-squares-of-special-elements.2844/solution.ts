function sumOfSquares (nums: number[]): number {
    let result = 0;
    const L = nums.length;
    for (let i = 1; i <= Math.sqrt(L); i++) {
        if (L % i !== 0) {
            continue;
        }
        const rest = L / i;
        result += Math.pow(nums[i - 1], 2);

        if (rest !== i) {
            result += Math.pow(nums[rest - 1], 2);
        }
    }
    return result;
}
