/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = function (words) {
    const trie = new Array(27);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let prev = trie;
        for (let j = word.length - 1; j > -1; j--) {
            prev[26] = false;
            const code = word.charCodeAt(j) - 97;
            prev = prev[code] || (prev[code] = new Array(27));
        }
        prev[26] === undefined && (prev[26] = true);
    }
    return dfs(trie, 0);
};

function dfs (trie, depth) {
    if (trie[26]) {
        return depth + 1;
    } else {
        let result = 0;
        for (let i = 0; i < 26; i++) {
            if (!trie[i]) {
                continue;
            }
            result += dfs(trie[i], depth + 1);
        }
        return result;
    }
}
