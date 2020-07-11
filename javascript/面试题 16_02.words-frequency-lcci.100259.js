/**
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
    this.charCountMap = Object.create(null);
    for(let i=0;i<book.length;i++){
        this.charCountMap[book[i]] = (this.charCountMap[book[i]] || 0)+1;
    }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
    return this.charCountMap[word] || 0;
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */