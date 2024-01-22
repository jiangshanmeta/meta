function minimumPushes (word: string): number {
    const counts = new Array<number>(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        counts[word.charCodeAt(i) - 97]++;
    }
    counts.sort((a, b) => b - a);
    let res = 0;
    let count = 0;
    for (let i = 0; i < counts.length; i++) {
        if (i % 8 === 0) {
            count++;
        }
        res += count * counts[i];
    }
    return res;
}
