/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    ranges.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    if (ranges[0][0] > left) {
        return false;
    }
    let start = ranges[0][0];
    for (const range of ranges) {
        if (start < left) {
            start = range[1];
            continue;
        }
        if (range[0] > start + 1) {
            if (start >= right) {
                return true;
            }
            return false;
        }
        start = Math.max(start, range[1]);
    }
    return start >= right;
};
