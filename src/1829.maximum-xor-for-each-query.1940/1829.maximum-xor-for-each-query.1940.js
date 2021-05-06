/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
    const result = [];
    let xors = 0;
    const mask = (1 << maximumBit) - 1;
    for (let i = 0; i < nums.length; i++) {
        xors ^= nums[i];
        result.push((mask | xors) ^ xors);
    }
    return result.reverse();
};
