/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const result = [];
    const groupBySize = {};
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        (groupBySize[size] || (groupBySize[size] = [])).push(i);
        if (groupBySize[size].length === size) {
            result.push(groupBySize[size]);
            groupBySize[size] = null;
        }
    }

    return result;
};
