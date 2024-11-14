/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    const isBigger = (a, b) => {
        const L = Math.min(a.length, b.length);
        for (let i = 0; i < L; i++) {
            if (map[b[i]] > map[a[i]]) {
                return false;
            }
            if (map[a[i]] > map[b[i]]) {
                return true;
            }
        }
        return a.length >= b.length;
    };

    for (let i = 1; i < words.length; i++) {
        if (!isBigger(words[i], words[i - 1])) {
            return false;
        }
    }
    return true;
};
