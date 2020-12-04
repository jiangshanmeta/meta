/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
    if (nums.length === 0) {
        return false;
    }
    const sum = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);
    if (sum % 4 !== 0) {
        return false;
    }
    const quarter = sum / 4;
    if (nums.some(item => item > quarter)) {
        return false;
    }
    return backTracking([
        0, 0, 0, 0, ], nums, 0, quarter);
};

function backTracking (lengths, nums, index, quarter) {
    if (index === nums.length) {
        return lengths.every(item => item === quarter);
    }
    const visited = {};

    for (let i = 0; i < 4; i++) {
        if (lengths[i] + nums[index] > quarter || visited[lengths[i]]) {
            continue;
        }
        visited[lengths[i]] = true;
        lengths[i] += nums[index];
        const rst = backTracking(lengths, nums, index + 1, quarter);
        if (rst) {
            return true;
        }
        lengths[i] -= nums[index];
    }
    return false;
}
