/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    let low = Math.max(...weights);
    let high = 0;
    for (let i = 0; i < weights.length; i++) {
        high += weights[i];
    }
    let result = high;
    while (low <= high) {
        const mid = (low + high) >> 1;

        if (countDay(weights, mid) > D) {
            low = mid + 1;
        } else {
            result = Math.min(result, mid);
            high = mid - 1;
        }
    }
    return result;
};

function countDay (weights, K) {
    let count = 0;
    let index = 0;
    while (index < weights.length) {
        let carry = 0;
        while (index < weights.length && (carry + weights[index]) <= K) {
            carry += weights[index++];
        }
        count++;
    }
    return count;
}
