/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    return s.split(' ').slice(0, k).join(' ');
};
