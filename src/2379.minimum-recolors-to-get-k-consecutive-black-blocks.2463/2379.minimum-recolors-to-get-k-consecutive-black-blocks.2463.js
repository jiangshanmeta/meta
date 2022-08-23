/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let count = 0;
    let result = k;
    for (let i = 0; i < k - 1; i++) {
        if (blocks[i] === 'W') {
            count++;
        }
    }
    for (let i = k - 1; i < blocks.length; i++) {
        if (blocks[i] === 'W') {
            count++;
        }
        result = Math.min(result, count);
        if (blocks[i - k + 1] === 'W') {
            count--;
        }
    }
    return result;
};
