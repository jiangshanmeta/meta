/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
    const [
        N, M, ] = binaryMatrix.dimensions();
    const oneIndexs = [];
    for (let i = 0; i < N; i++) {
        oneIndexs[i] = findFirstOneIndex(binaryMatrix, i, M);
    }
    const index = Math.min(...oneIndexs);
    if (index === M) {
        return -1;
    } else {
        return index;
    }
};

function findFirstOneIndex (binaryMatrix, x, M) {
    let result = M;
    let low = 0;
    let high = M - 1;
    while (low <= high) {
        const mid = (low + high) >>> 1;
        const value = binaryMatrix.get(x, mid);
        if (value === 1) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}
