/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const letterSet = new Set(brokenLetters);
    return text.split(' ').reduce((count, word) => {
        let allPass = true;
        for (let i = 0; i < word.length; i++) {
            if (letterSet.has(word[i])) {
                allPass = false;
                break;
            }
        }

        return count + (allPass ? 1 : 0);
    }, 0);
};
