/**
 * @param {string[]} wordsDict
 */
var WordDistance = function (wordsDict) {
    this.map = {};
    for (let i = 0; i < wordsDict.length; i++) {
        if (!this.map[wordsDict[i]]) {
            this.map[wordsDict[i]] = [];
        }
        this.map[wordsDict[i]].push(i);
    }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
    const indexs1 = this.map[word1];
    const indexs2 = this.map[word2];
    let result = Infinity;
    let i = 0;
    let j = 0;
    while (i < indexs1.length && j < indexs2.length) {
        if (indexs1[i] > indexs2[j]) {
            result = Math.min(result, indexs1[i] - indexs2[j++]);
        } else {
            result = Math.min(result, indexs2[j] - indexs1[i++]);
        }
    }

    return result;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
