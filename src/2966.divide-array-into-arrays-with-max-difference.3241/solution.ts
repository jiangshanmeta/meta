function divideArray (nums: number[], k: number): number[][] {
    const result:number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 3) {
        if (i + 2 < nums.length) {
            if (nums[i + 2] - nums[i] > k) {
                return [];
            }
            result.push([nums[i], nums[i + 1], nums[i + 2], ]);
        } else if (i + 1 < nums.length) {
            if (nums[i + 1] - nums[i] > k) {
                return [];
            }
            result.push([nums[i], nums[i + 1], nums[i + 2], ]);
        } else {
            result.push([nums[i], ]);
        }
    }
    return result;
}
