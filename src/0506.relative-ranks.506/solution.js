/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    const rank = nums.map((val, index) => {
        return {
            val,
            index,
        };
    }).sort((a, b) => b.val - a.val);

    const result = new Array(nums.length);

    for (let i = 0; i < rank.length; i++) {
        let str;
        if (i > 2) {
            str = (i + 1) + '';
        } else if (i === 2) {
            str = 'Bronze Medal';
        } else if (i === 1) {
            str = 'Silver Medal';
        } else {
            str = 'Gold Medal';
        }

        result[rank[i].index] = str;
    }

    return result;
};
