/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    words.sort((a, b) => b.length - a.length);
    const result = [];
    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < i; j++) {
            if (words[j].includes(words[i])) {
                result.push(words[i]);
                break;
            }
        }
    }
    return result;
};
