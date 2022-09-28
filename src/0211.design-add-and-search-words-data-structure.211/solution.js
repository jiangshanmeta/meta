/**
 * Initialize your data structure here.
 */
// 前缀树 基于数组的实现
var WordDictionary = function () {
    this.trie = new Array(26);
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let trie = this.trie;
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i) - 97;
        trie = trie[code] || (trie[code] = new Array(27));
    }

    trie[26] = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */

function dfs (trie, index, word) {
    if (index === word.length - 1) {
        if (word[index] === '.') {
            for (let i = 0; i < 26; i++) {
                if (trie[i] && trie[i][26]) {
                    return true;
                }
            }
        } else {
            const code = word.charCodeAt(index) - 97;
            return !!(trie[code] && trie[code][26]);
        }
    } else {
        if (word[index] === '.') {
            for (let i = 0; i < 26; i++) {
                if (trie[i]) {
                    if (dfs(trie[i], index + 1, word)) {
                        return true;
                    }
                }
            }
        } else {
            const code = word.charCodeAt(index) - 97;
            if (trie[code]) {
                return dfs(trie[code], index + 1, word);
            }
        }
    }
    return false;
}

WordDictionary.prototype.search = function (word) {
    return dfs(this.trie, 0, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
