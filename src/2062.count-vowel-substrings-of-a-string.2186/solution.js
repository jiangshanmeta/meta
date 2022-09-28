/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', ]);
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        const set = new Set();
        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) {
                break;
            }
            set.add(word[j]);
            if (set.size === 5) {
                result++;
            }
        }
    }

    return result;
};
