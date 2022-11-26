function threeSum (nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result:number[][] = [];
    let i = 0;
    while (i < nums.length) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[j] + nums[k] + nums[i];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                result.push([nums[i], nums[j], nums[k], ]);
                const numJ = nums[j++];
                while (j < k && nums[j] === numJ) {
                    j++;
                }
                const numK = nums[k--];
                while (j < k && nums[k] === numK) {
                    k--;
                }
            }
        }
        const num = nums[i++];
        while (i < nums.length && nums[i] === num) {
            i++;
        }
    }
    return result;
}
