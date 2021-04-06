function removeDuplicates (nums: number[]): number {
    if (nums.length < 3) {
        return nums.length;
    }

    let prev = nums[0];
    let count = 1;
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== prev) {
            count = 1;
            prev = nums[i];
            nums[index++] = nums[i];
        } else {
            if (count === 2) {
                continue;
            }
            nums[index++] = nums[i];
            count++;
        }
    }

    return index;
}
