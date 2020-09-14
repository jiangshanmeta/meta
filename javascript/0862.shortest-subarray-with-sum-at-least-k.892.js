/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
    const rangeSum = new Array(A.length + 1);
    rangeSum[0] = 0;
    for (let i = 0; i < A.length; i++) {
        rangeSum[i + 1] = rangeSum[i] + A[i];
    }
    let left = 0;
    let right = -1;
    let sum = 0;
    let result = A.length + 1;
    const noPositiveIndexs = [];
    while (right < A.length) {
        if (sum < 0) {
            sum = 0;
            left = right + 1;
            noPositiveIndexs.length = 0;
            continue;
        }
        if (sum < K) {
            right++;
            if (right < A.length) {
                sum += A[right];
                if (A[right] <= 0) {
                    noPositiveIndexs.push(right);
                }
            }
        } else {
            result = Math.min(result, right - left + 1);
            let minSum = A[left];
            let endIndex = left;
            for (let i = 0; i < noPositiveIndexs.length; i++) {
                if (rangeSum[noPositiveIndexs[i] + 1] - rangeSum[left] <= minSum) {
                    minSum = rangeSum[noPositiveIndexs[i] + 1] - rangeSum[left];
                    endIndex = noPositiveIndexs[i];
                }
            }
            sum -= minSum;
            left = endIndex + 1;
            while (noPositiveIndexs.length > 0 && noPositiveIndexs[0] < left) {
                noPositiveIndexs.shift();
            }
        }
    }
    return result === A.length + 1 ? -1 : result;
};
