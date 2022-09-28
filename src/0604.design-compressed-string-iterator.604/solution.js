/**
 * @param {string} compressedString
 */
var StringIterator = function (compressedString) {
    this.compressedString = compressedString;
    this.letter = compressedString[0];
    let index = 1;
    while (index < compressedString.length && isDigit(compressedString[index])) {
        index++;
    }
    this.restCount = +compressedString.slice(1, index);
    this.index = index;
};

function isDigit (letter) {
    const code = letter.charCodeAt(0);

    return code > 47 && code < 58;
}

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {
    if (this.restCount === 0) {
        return ' ';
    }

    const result = this.letter;
    this.restCount--;
    if (this.restCount === 0 && this.index < this.compressedString.length) {
        this.letter = this.compressedString[this.index++];
        const start = this.index++;
        while (this.index < this.compressedString.length && isDigit(this.compressedString[this.index])) {
            this.index++;
        }
        this.restCount = +this.compressedString.slice(start, this.index);
    }

    return result;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
    return this.restCount > 0;
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
