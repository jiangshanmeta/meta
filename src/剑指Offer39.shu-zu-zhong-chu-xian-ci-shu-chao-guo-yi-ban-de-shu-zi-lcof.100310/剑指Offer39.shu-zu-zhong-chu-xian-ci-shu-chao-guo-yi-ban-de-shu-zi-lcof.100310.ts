function majorityElement (nums: number[]): number {
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
    return result;
}
