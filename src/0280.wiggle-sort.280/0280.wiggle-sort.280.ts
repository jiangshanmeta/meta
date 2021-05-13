/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort (nums: number[]): void {
    const sorted = [...nums, ].sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let index = 0;
    while (left < right) {
        nums[index++] = sorted[left++];
        nums[index++] = sorted[right--];
    }
    if (left === right) {
        nums[index] = sorted[left];
    }
}
