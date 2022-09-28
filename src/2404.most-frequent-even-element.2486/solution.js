/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let result = -1;
    let rstCount = 0;
    const map = new Map();
    for (const num of nums) {
        if (num & 1) {
            continue;
        }
        const count = map.has(num) ? map.get(num) + 1 : 1;
        map.set(num, count);
        if (count > rstCount) {
            result = num;
            rstCount = count;
        } else if (count === rstCount && num < result) {
            result = num;
        }
    }
    return result;
};
