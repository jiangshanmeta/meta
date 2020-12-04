/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    const result = [];
    const Length = pattern.length;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const word2pattern = {};
        const pattern2word = {};
        let flag = true;
        for (let j = 0; j < Length; j++) {
            const wordLetter = word[j];
            const patternLettern = pattern[j];
            if (word2pattern[wordLetter] === undefined) {
                if (pattern2word[patternLettern] !== undefined) {
                    flag = false;
                    break;
                }
                word2pattern[wordLetter] = patternLettern;
                pattern2word[patternLettern] = wordLetter;
            } else if (word2pattern[wordLetter] !== patternLettern) {
                flag = false;
                break;
            }
        }
        flag && result.push(word);
    }
    return result;
};
