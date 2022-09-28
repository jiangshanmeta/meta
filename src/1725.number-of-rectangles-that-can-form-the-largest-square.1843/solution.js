/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let maxLength = 0;
    let result = 0;
    for (let i = 0; i < rectangles.length; i++) {
        const len = Math.min(...rectangles[i]);
        if (len > maxLength) {
            maxLength = len;
            result = 1;
        } else if (len === maxLength) {
            result++;
        }
    }
    return result;
};
