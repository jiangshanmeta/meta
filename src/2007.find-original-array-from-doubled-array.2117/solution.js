/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    changed.sort((a, b) => a - b);
    const countBy = changed.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});
    const removedCountMap = {};
    const result = [];
    for (let i = 0; i < changed.length; i++) {
        if (removedCountMap[changed[i]]) {
            removedCountMap[changed[i]]--;
            continue;
        }
        countBy[changed[i]]--;
        result.push(changed[i]);
        if (!countBy[2 * changed[i]]) {
            return [];
        }
        removedCountMap[2 * changed[i]] = (removedCountMap[2 * changed[i]] || 0) + 1;
        countBy[2 * changed[i]]--;
    }
    return result;
};
