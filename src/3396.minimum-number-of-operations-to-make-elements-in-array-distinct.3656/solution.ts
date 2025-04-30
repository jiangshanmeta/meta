function minimumOperations (nums: number[]): number {
    const counts = new Array<number>(101).fill(0);
    let duplicate = 0;
    for (const n of nums) {
        counts[n]++;
        if (counts[n] === 2) {
            duplicate++;
        }
    }

    let result = 0;
    while (duplicate > 0) {
        for (let i = 3 * result; i < Math.min(nums.length, (result + 1) * 3); i++) {
            const n = nums[i];
            counts[n]--;
            if (counts[n] === 1) {
                duplicate--;
            }
        }

        result++;
    }

    return result;
}
