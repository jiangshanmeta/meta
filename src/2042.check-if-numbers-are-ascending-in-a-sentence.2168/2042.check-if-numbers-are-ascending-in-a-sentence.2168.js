/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    const num = s.split(' ').filter(item => /^\d+$/.test(item)).map(item => +item);
    for (let i = 1; i < num.length; i++) {
        if (num[i] <= num[i - 1]) {
            return false;
        }
    }
    return true;
};
