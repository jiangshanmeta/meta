/**
 * Initialize your data structure here.
 */
// 前缀树
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
        // trie[26] 表示是否有以此为结尾的
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
        // 长度对了 看是否以此为结尾且更换过一个letter
        return trie[26] && changed;
    } else {
        // 长度小于目标长度
        const code = word.charCodeAt(index) - 97;
        if (changed) {
            // 已经改变了，就不能改了
            return dfs(trie[code], word, index + 1, true);
        } else {
            // 还没有改过一个letter 大暴搜
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
