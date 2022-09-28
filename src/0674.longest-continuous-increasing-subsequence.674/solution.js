/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let startIndex = 0;
    let maxCount = 0;
    while (startIndex < nums.length) {
        let lastVal = nums[startIndex];
        let endIndex = startIndex + 1;
        while (endIndex < nums.length && nums[endIndex] > lastVal) {
            lastVal = nums[endIndex];
            endIndex++;
        }
        const count = endIndex - startIndex;
        if (count > maxCount) {
            maxCount = count;
        }

        startIndex = endIndex;
    }

    return maxCount;
};
