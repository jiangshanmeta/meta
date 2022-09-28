function majorityElement (nums: number[]): number {
    if (nums.length === 0) {
        return -1;
    }

    let result = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === result) {
            count++;
        } else if (count > 0) {
            count--;
        } else {
            count = 1;
            result = nums[i];
        }
    }
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === result) {
            count++;
        }
    }
    if (count > nums.length / 2) {
        return result;
    }
    return -1;
}
