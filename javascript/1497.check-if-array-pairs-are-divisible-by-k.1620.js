/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    const groupBy = arr.reduce((obj, num) => {
        if (num < 0) {
            num = num % k + k;
        }
        num %= k;
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});

    const keys = Object.keys(groupBy);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === '0') {
            if (groupBy['0'] % 2 !== 0) {
                return false;
            }
        } else if (groupBy[keys[i]] !== groupBy[k - keys[i]]) {
            return false;
        }
    }
    return true;
};
