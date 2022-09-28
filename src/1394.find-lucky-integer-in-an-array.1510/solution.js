/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const countBy = arr.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
    let result = -1;
    Object.entries(countBy).forEach(([
        key, value, ]) => {
        if (+key === value && value > result) {
            result = value;
        }
    });
    return result;
};
