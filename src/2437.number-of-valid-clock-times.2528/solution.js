/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let result = 1;
    if (time[3] === '?' || time[4] === '?') {
        if (time[3] === '?' && time[4] === '?') {
            result *= 60;
        } else if (time[3] === '?') {
            result *= 6;
        } else {
            result *= 10;
        }
    }
    if (time[0] === '?' || time[1] === '?') {
        if (time[0] === '?' && time[1] === '?') {
            result *= 24;
        } else if (time[0] === '?') {
            if (+time[1] > 3) {
                result *= 2;
            } else {
                result *= 3;
            }
        } else {
            if (time[0] === '2') {
                result *= 4;
            } else {
                result *= 10;
            }
        }
    }

    return result;
};
