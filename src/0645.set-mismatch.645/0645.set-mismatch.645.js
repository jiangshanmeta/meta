/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let sum = 0;
    const map = {};
    let duplicateNum;
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        sum += val;
        // 利用map找重复元素
        if (map[val] === undefined) {
            map[val] = 1;
        } else {
            duplicateNum = val;
        }
    }

    const L = nums.length;
    // 等差数列求和
    const targetSum = (L + 1) * L / 2;

    return [
        duplicateNum, targetSum - sum + duplicateNum, ];
};
