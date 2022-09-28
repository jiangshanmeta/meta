/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    let result = 0;
    let leftOdd = 0;
    let leftEven = 0;
    let rightOdd = 0;
    let rightEven = 0;
    for (let i = 1; i < nums.length; i++) {
        if (i & 1) {
            rightOdd += nums[i];
        } else {
            rightEven += nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (leftOdd + rightEven === leftEven + rightOdd) {
            result++;
        }
        if (i & 1) {
            leftOdd += nums[i];
        } else {
            leftEven += nums[i];
        }
        if (i < nums.length - 1) {
            if ((i + 1) & 1) {
                rightOdd -= nums[i + 1];
            } else {
                rightEven -= nums[i + 1];
            }
        }
    }

    return result;
};
