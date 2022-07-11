/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function (time, fruits, limit) {
    let result = 0;
    for (const [type, num, ] of fruits) {
        result += time[type] * Math.ceil(num / limit);
    }
    return result;
};
