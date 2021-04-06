/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors (nums: number[]): void {
    if (nums.length < 2) {
        return;
    }
    let lt = 0;
    let gt = nums.length - 1;
    let i = 0;
    while (i <= gt) {
        if (nums[i] === 1) {
            i++;
        } else if (nums[i] === 2) {
            swap(nums, i, gt);
            gt--;
        } else {
            swap(nums, lt, i);
            lt++;
            i++;
        }
    }
}

function swap (arr:number[], i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
