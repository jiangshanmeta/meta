/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
    let index = 0;
    for (let i = 0; i < groups.length; i++) {
        while (index < nums.length && !isMatch(groups[i], nums, index)) {
            index++;
        }
        index += groups[i].length;
        if (index > nums.length) {
            return false;
        }
    }
    return true;
};

function isMatch (group, nums, index) {
    for (let i = 0; i < group.length; i++) {
        if (index === nums.length || group[i] !== nums[index++]) {
            return false;
        }
    }
    return true;
}
