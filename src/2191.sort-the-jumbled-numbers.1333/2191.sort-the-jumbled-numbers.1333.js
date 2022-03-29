/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    return nums.map((item, index) => {
        return {
            item,
            index,
            mapped: +`${item}`.split('').map((index2) => mapping[index2]).join(''),
        };
    }).sort((a, b) => {
        if (a.mapped !== b.mapped) {
            return a.mapped - b.mapped;
        }
        return a.index - b.index;
    }).map(item => item.item);
};
