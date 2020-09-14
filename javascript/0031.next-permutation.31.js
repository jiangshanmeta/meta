/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            let moreVal = nums[i];
            let moreIndex = i;

            for (let index = i + 1; index < nums.length; index++) {
                if (nums[index] > nums[i - 1] && nums[index] <= moreVal) {
                    moreIndex = index;
                    moreVal = nums[index];
                }
            }

            nums[moreIndex] = nums[i - 1];
            nums[i - 1] = moreVal;

            let high = nums.length - 1;

            while (i < high) {
                const tmp = nums[i];
                nums[i] = nums[high];
                nums[high] = tmp;
                i++;
                high--;
            }
            return;
        }
    }

    nums.reverse();
};
