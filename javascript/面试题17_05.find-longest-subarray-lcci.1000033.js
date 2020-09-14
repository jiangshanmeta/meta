/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
    let letterCount = 0;
    let numberCount = 0;
    let maxLen = 0;
    let start = 0;
    const map = {};
    map[0] = -1;
    for (let i = 0; i < array.length; i++) {
        const code = array[i].charCodeAt(0);
        if (code > 47 && code < 58) {
            numberCount++;
        } else {
            letterCount++;
        }
        const diff = numberCount - letterCount;
        if (map[diff] === undefined) {
            map[diff] = i;
        } else if (i - map[diff] > maxLen) {
            maxLen = i - map[diff];
            start = i - maxLen + 1;
        }
    }
    return array.slice(start, start + maxLen);
};
