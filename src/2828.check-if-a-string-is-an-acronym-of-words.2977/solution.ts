function isAcronym (words: string[], s: string): boolean {
    if (words.length !== s.length) {
        return false;
    }
    for (let i = 0; i < words.length; i++) {
        if (s[i] !== words[i][0]) {
            return false;
        }
    }
    return true;
}
