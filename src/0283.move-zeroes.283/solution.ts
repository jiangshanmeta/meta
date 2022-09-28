/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes (nums: number[]): void {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }
        nums[index++] = nums[i];
    }
    while (index < nums.length) {
        nums[index++] = 0;
    }
}
