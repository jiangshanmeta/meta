function makeEqual (words: string[]): boolean {
    const counts:number[] = new Array(26).fill(0);
    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            counts[word.charCodeAt(i) - 97]++;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (counts[i] % words.length !== 0) {
            return false;
        }
    }
    return true;
}
