/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    const sum = cardPoints.reduce((sum, item) => {
        return sum + item;
    }, 0);
    const windowLength = cardPoints.length - k;
    if (windowLength === 0) {
        return sum;
    }
    let result = 0;
    let slidingWindowSum = 0;
    for (let i = 0; i < windowLength - 1; i++) {
        slidingWindowSum += cardPoints[i];
    }
    for (let i = windowLength - 1; i < cardPoints.length; i++) {
        slidingWindowSum += cardPoints[i];
        result = Math.max(result, sum - slidingWindowSum);
        slidingWindowSum -= cardPoints[i + 1 - windowLength];
    }
    return result;
};
