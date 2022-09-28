function countPrefixes (words: string[], s: string): number {
    let result = 0;
    for (const word of words) {
        if (s.startsWith(word)) {
            result++;
        }
    }
    return result;
}
