/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    const evenIndexNum = [];
    const oddIndexNum = [];
    for (let i = 0; i < nums.length; i++) {
        if (i & 1) {
            oddIndexNum.push(nums[i]);
        } else {
            evenIndexNum.push(nums[i]);
        }
    }
    evenIndexNum.sort((a, b) => a - b);
    oddIndexNum.sort((a, b) => b - a);
    const result = [];
    for (let i = 0; i < oddIndexNum.length; i++) {
        result.push(evenIndexNum[i], oddIndexNum[i]);
    }
    if (evenIndexNum.length !== oddIndexNum.length) {
        result.push(evenIndexNum[evenIndexNum.length - 1]);
    }
    return result;
};
