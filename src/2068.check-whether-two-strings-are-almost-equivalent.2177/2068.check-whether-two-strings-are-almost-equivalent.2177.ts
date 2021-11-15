function checkAlmostEquivalent (word1: string, word2: string): boolean {
    const counts1 = getCounts(word1);
    const counts2 = getCounts(word2);
    for (let i = 0; i < 26; i++) {
        if (Math.abs(counts1[i] - counts2[i]) > 3) {
            return false;
        }
    }
    return true;
}

function getCounts (word:string) {
    const result:number[] = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        result[word.charCodeAt(i) - 97]++;
    }
    return result;
}
