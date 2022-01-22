/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
    let result = 0;
    while (target !== 1) {
        if (target & 1) {
            result++;
            target--;
        } else if (maxDoubles) {
            maxDoubles--;
            target >>= 1;
            result++;
        } else {
            result += target - 1;
            break;
        }
    }
    return result;
};
