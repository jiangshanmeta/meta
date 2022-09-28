/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    const map1 = new Map();
    for (const word of words1) {
        if (map1.has(word)) {
            map1.set(word, 2);
        } else {
            map1.set(word, 1);
        }
    }
    const map2 = new Map();
    for (const word of words2) {
        if (map2.has(word)) {
            map2.set(word, 2);
        } else {
            map2.set(word, 1);
        }
    }
    let result = 0;
    for (const [word, count, ] of map1) {
        if (count !== 1) {
            continue;
        }
        if (map2.has(word) && map2.get(word) === 1) {
            result++;
        }
    }
    return result;
};
