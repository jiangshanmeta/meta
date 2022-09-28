/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let result = 0;
    const backTracking = (index, val) => {
        if (index === nums.length) {
            result += val;
            return;
        }
        backTracking(index + 1, val ^ nums[index]);
        backTracking(index + 1, val);
    };
    backTracking(0, 0);

    return result;
};
