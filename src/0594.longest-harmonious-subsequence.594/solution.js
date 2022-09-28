/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const map = {};
    const numTypes = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num] === undefined) {
            map[num] = 1;
            numTypes.push(num);
        } else {
            map[num]++;
        }
    }

    let max = 0;
    for (let i = 0; i < numTypes.length; i++) {
        const curNum = numTypes[i];
        const curCount = map[curNum];
        if (map[curNum + 1] !== undefined) {
            const nextCount = map[curNum + 1];
            if (curCount + nextCount > max) {
                max = curCount + nextCount;
            }
        }
    }

    return max;
};
