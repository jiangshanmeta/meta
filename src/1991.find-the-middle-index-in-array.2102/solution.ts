function findMiddleIndex (nums: number[]): number {
    const total = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum === total - sum - nums[i]) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
}
