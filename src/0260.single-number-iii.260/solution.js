/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let bitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        bitSum ^= nums[i];
    }

    let ruler = 1;
    while ((bitSum & ruler) === 0) {
        ruler <<= 1;
    }

    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & ruler) !== 0) {
            a ^= nums[i];
        }
    }

    return [
        a, bitSum ^ a, ];
};
