function threeSumSmaller (nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    const i = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            while (j < k && nums[i] + nums[j] + nums[k] >= target) {
                k--;
            }
            if (j < k) {
                result += k - j;
                j++;
            }
        }
    }
    return result;
}
