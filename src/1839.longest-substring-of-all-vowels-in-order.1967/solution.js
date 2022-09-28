/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
    const flags = new Array(5).fill(false);
    const map = {
        a: 0,
        e: 1,
        i: 2,
        o: 3,
        u: 4,
    };
    let index = 0;
    let result = 0;
    while (index < word.length) {
        if (word[index] !== 'a') {
            index++;
            continue;
        }

        flags[0] = true;
        const start = index++;
        while (index < word.length && word[index] === 'a') {
            index++;
        }
        let hasE = false;
        while (index < word.length && word[index] === 'e') {
            hasE = true;
            index++;
        }
        if (!hasE) {
            continue;
        }
        let hasI = false;
        while (index < word.length && word[index] === 'i') {
            hasI = true;
            index++;
        }
        if (!hasI) {
            continue;
        }

        let hasO = false;
        while (index < word.length && word[index] === 'o') {
            hasO = true;
            index++;
        }
        if (!hasO) {
            continue;
        }

        let hasU = false;
        while (index < word.length && word[index] === 'u') {
            hasU = true;
            index++;
        }
        if (!hasU) {
            continue;
        }

        result = Math.max(result, index - start);
    }
    return result;
};
