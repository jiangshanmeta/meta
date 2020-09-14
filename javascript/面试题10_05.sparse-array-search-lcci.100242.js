/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s, left = 0, right = words.length - 1) {
    if (left > right) {
        return -1;
    }
    const mid = (left + right) >> 1;
    if (words[mid] === '') {
        const leftRst = findString(words, s, left, mid - 1);
        if (leftRst === -1) {
            return findString(words, s, mid + 1, right);
        }
        return leftRst;
    } else if (words[mid] < s) {
        return findString(words, s, mid + 1, right);
    } else if (words[mid] > s) {
        return findString(words, s, left, mid - 1);
    } else {
        return mid;
    }
};
