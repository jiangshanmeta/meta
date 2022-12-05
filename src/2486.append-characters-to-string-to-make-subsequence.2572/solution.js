/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let indexS = 0;
    let indexT = 0;
    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
            indexT++;
        } else {
            indexS++;
        }
    }
    return t.length - indexT;
};
