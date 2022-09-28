class ValidWordAbbr {
    map:Map<string, string[]>
    constructor (dictionary: string[]) {
        this.map = new Map<string, string[]>();
        for (const word of dictionary) {
            const abbr = this.getAbbr(word);
            if (this.map.has(abbr)) {
                this.map.get(abbr).push(word);
            } else {
                this.map.set(abbr, [word, ]);
            }
        }
    }

    getAbbr (word:string):string {
        if (word.length < 3) {
            return word;
        }
        return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
    }

    isUnique (word: string): boolean {
        const abbr = this.getAbbr(word);
        if (!this.map.has(abbr)) {
            return true;
        }

        return this.map.get(abbr).every(item => item === word);
    }
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
