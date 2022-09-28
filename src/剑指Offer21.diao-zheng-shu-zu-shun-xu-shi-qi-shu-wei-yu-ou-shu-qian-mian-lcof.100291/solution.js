/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let evenIndex = 0;
    let oddIndex = nums.length - 1;
    while (evenIndex < oddIndex) {
        while (evenIndex < oddIndex && nums[evenIndex] % 2 !== 0) {
            evenIndex++;
        }
        while (evenIndex < oddIndex && nums[oddIndex] % 2 !== 1) {
            oddIndex--;
        }
        if (evenIndex < oddIndex) {
            const tmp = nums[oddIndex];
            nums[oddIndex] = nums[evenIndex];
            nums[evenIndex] = tmp;
            oddIndex--;
            evenIndex++;
        }
    }
    return nums;
};
