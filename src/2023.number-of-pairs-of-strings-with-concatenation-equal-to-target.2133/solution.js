/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
    const map = {};
    for (const word of nums) {
        map[word] = (map[word] || 0) + 1;
    }
    let result = 0;
    for (const word of nums) {
        if (word !== target.slice(0, word.length)) {
            continue;
        }
        const rest = target.slice(word.length);
        if (!map[rest]) {
            continue;
        }
        result += word === rest ? map[word] - 1 : map[rest];
    }
    return result;
};
