/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    const flags = new Array(26).fill(false);
    for (let i = 0; i < sentence.length; i++) {
        flags[sentence.charCodeAt(i) - 97] = true;
    }
    return flags.every(item => item);
};
