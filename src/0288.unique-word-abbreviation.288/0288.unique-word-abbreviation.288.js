/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
    this.map = dictionary.reduce((obj, word) => {
        const abbr = calc(word);
        if (!obj[abbr]) {
            obj[abbr] = [];
        }
        obj[abbr].push(word);
        return obj;
    }, {});
};

function calc (word) {
    if (word.length < 3) {
        return word;
    }
    return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
}

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
    const abbr = calc(word);
    if (!this.map[abbr]) {
        return true;
    }
    return this.map[abbr].every(item => item === word);
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
