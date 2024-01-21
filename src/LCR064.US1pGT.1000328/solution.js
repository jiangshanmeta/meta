/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
    this.trie = new Array(26);
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
    for (let i = 0; i < dict.length; i++) {
        const word = dict[i];
        let trie = this.trie;
        for (let j = 0; j < word.length; j++) {
            const code = word.charCodeAt(j) - 97;
            trie = (trie[code] || (trie[code] = new Array(27)));
        }
        trie[26] = true;
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
    return dfs(this.trie, word, 0, false);
};

function dfs (trie, word, index, changed) {
    if (!trie) {
        return false;
    }
    if (index === word.length) {
        return trie[26] && changed;
    } else {
        const code = word.charCodeAt(index) - 97;
        if (changed) {
            return dfs(trie[code], word, index + 1, true);
        } else {
            for (let i = 0; i < 26; i++) {
                if (dfs(trie[i], word, index + 1, i !== code)) {
                    return true;
                }
            }
            return false;
        }
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
