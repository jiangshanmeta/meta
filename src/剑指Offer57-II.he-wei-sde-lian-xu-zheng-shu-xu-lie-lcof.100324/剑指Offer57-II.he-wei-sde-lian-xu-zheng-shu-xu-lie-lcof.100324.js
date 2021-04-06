/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    const result = [];
    let left = 1;
    let right = 1;
    let sum = 1;
    while (left < target) {
        while (sum < target && right < target) {
            right++;
            sum += right;
        }
        if (left !== right && sum === target) {
            const sub = [];
            for (let i = left; i <= right; i++) {
                sub.push(i);
            }
            result.push(sub);
        }
        sum -= left;
        left++;
        if (left > right) {
            right++;
            sum = left;
        }
    }
    return result;
};
