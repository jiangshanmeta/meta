/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let eq = 0;
    let lt = 0;
    for (const num of nums) {
        if (num === target) {
            eq++;
        } else if (num < target) {
            lt++;
        }
    }
    const result = [];
    for (let i = lt; i < lt + eq; i++) {
        result.push(i);
    }
    return result;
};
