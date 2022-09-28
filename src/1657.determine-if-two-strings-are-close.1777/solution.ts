function closeStrings (word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false;
    }
    const counts1:number[] = new Array(26).fill(0);
    const counts2:number[] = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        counts1[word1.charCodeAt(i) - 97]++;
        counts2[word2.charCodeAt(i) - 97]++;
    }
    const helper1:number[] = [];
    const helper2:number[] = [];
    for (let i = 0; i < 26; i++) {
        if (counts1[i] === 0 && counts2[i] === 0) {
            continue;
        } else if (counts1[i] !== 0 && counts2[i] !== 0) {
            if (counts1[i] === counts2[i]) {
                continue;
            }
            helper1.push(counts1[i]);
            helper2.push(counts2[i]);
        } else {
            return false;
        }
    }

    helper1.sort((a, b) => a - b);
    helper2.sort((a, b) => a - b);
    for (let i = 0; i < helper1.length; i++) {
        if (helper1[i] !== helper2[i]) {
            return false;
        }
    }
    return true;
}
