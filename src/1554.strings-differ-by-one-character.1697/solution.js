/**
 * @param {string[]} dict
 * @return {boolean}
 */
var differByOne = function (dict) {
    for (let i = 1; i < dict.length; i++) {
        for (let j = 0; j < i; j++) {
            if (diff1(dict[i], dict[j])) {
                return true;
            }
        }
    }
    return false;
};

function diff1 (word1, word2) {
    let hasDiff = false;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            if (hasDiff) {
                return false;
            }
            hasDiff = true;
        }
    }
    return hasDiff;
}
