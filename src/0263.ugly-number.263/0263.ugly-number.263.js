/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num < 1) {
        return false;
    }

    while ((num & 1) === 0) {
        num >>= 1;
    }

    while (num % 3 === 0) {
        num /= 3;
    }

    while (num % 5 === 0) {
        num /= 5;
    }

    if (num === 1) {
        return true;
    }
    return false;
};
