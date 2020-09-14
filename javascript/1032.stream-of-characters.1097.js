/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
    const trie = new Array(26);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let prev = trie;
        // 每个单词倒着构建前缀树
        for (let j = word.length - 1; j > -1; j--) {
            const code = word.charCodeAt(j) - 97;
            prev = prev[code] || (prev[code] = new Array(27));
        }
        // 第26位表示是否结束该单词
        prev[26] = true;
    }
    this.trie = trie;
    this.queryCache = [];
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
    this.queryCache.push(letter.charCodeAt(0) - 97);
    // 在前缀树中查询
    let trie = this.trie;
    for (let j = this.queryCache.length - 1; j > -1; j--) {
        const code = this.queryCache[j];
        trie = trie[code];
        if (!trie) {
            return false;
        }
        if (trie[26]) {
            return true;
        }
    }
    return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
