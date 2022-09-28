function isPrefixString (s: string, words: string[]): boolean {
    let index = 0;
    let i = 0;
    let j = 0;
    while (index < s.length && i < words.length) {
        if (s[index] !== words[i][j]) {
            return false;
        }
        index++;
        j++;
        if (j === words[i].length) {
            i++;
            j = 0;
        }
    }
    return index === s.length && j === 0;
}
