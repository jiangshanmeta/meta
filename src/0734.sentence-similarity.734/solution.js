/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) {
        return false;
    }
    const map = {};
    for (let i = 0; i < similarPairs.length; i++) {
        if (!map[similarPairs[i][0]]) {
            map[similarPairs[i][0]] = {};
        }
        map[similarPairs[i][0]][similarPairs[i][1]] = true;

        if (!map[similarPairs[i][1]]) {
            map[similarPairs[i][1]] = {};
        }
        map[similarPairs[i][1]][similarPairs[i][0]] = true;
    }

    for (let i = 0; i < sentence1.length; i++) {
        if (sentence1[i] === sentence2[i]) {
            continue;
        }
        if (!map[sentence1[i]] || !map[sentence1[i]][sentence2[i]]) {
            return false;
        }
    }
    return true;
};
