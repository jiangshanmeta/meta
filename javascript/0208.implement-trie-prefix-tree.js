/**
 * Initialize your data structure here.
 */
// 实现前缀树，要啥说明啊
var Trie = function() {
    this.trie = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let before = this.trie;
    for(let i=0;i<word.length;i++){
        if(before[word[i]] === undefined){
            before[word[i]] = {};
        }
        before = before[word[i]];
    }
    before.exact = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let before = this.trie;
    for(let i=0;i<word.length;i++){
        if(before[word[i]] === undefined){
            return false;
        }
        before = before[word[i]];
    }
    return !!before.exact;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let before = this.trie;
    for(let i=0;i<prefix.length;i++){
        if(before[prefix[i]] === undefined){
            return false;
        }
        before = before[prefix[i]];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */