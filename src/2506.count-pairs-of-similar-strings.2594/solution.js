/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    let result = 0;
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        const key = calcKey(words[i]);
        if (map.has(key)) {
            const count = map.get(key);
            result += count;
            map.set(key, count + 1);
        } else {
            map.set(key, 1);
        }
    }
    return result;
};

function calcKey (word) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        result |= 1 << (word.charCodeAt(i) - 97);
    }
    return result;
}
