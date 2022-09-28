/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const N = nums.length;
    const sortedNums = nums.map(item => parseInt(item, 2)).sort((a, b) => a - b);
    if (sortedNums[0] !== 0) {
        return '0'.repeat(N);
    }

    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i + 1] !== sortedNums[i] + 1) {
            return (sortedNums[i] + 1).toString(2).padStart(N, 0);
        }
    }

    return '1'.repeat(N);
};
