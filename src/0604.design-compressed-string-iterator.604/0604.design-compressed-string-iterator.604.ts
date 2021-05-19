class StringIterator {
    index = 0;
    count = 0;
    char = '';
    constructor (protected compressedString: string) {
        this.parseNext();
    }

    isDigit (letter:string):boolean {
        const code = letter.charCodeAt(0);
        return code > 47 && code < 58;
    }

    parseNext () {
        if (this.index >= this.compressedString.length) {
            return;
        }
        this.char = this.compressedString[this.index++];
        const start = this.index++;
        while (this.index < this.compressedString.length && this.isDigit(this.compressedString[this.index])) {
            this.index++;
        }
        this.count = +this.compressedString.slice(start, this.index);
    }

    next (): string {
        if (!this.hasNext()) {
            return ' ';
        }

        const result = this.char;
        this.count--;
        if (this.count === 0) {
            this.parseNext();
        }
        return result;
    }

    hasNext (): boolean {
        return this.index < this.compressedString.length || this.count !== 0;
    }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
