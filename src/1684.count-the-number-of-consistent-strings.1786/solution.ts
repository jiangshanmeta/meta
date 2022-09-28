function countConsistentStrings (allowed: string, words: string[]): number {
    const set = new Set(allowed);
    let result = 0;
    for (const word of words) {
        if (word.split('').every(letter => set.has(letter))) {
            result++;
        }
    }
    return result;
}
