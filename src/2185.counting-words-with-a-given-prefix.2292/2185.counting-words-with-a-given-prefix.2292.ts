function prefixCount (words: string[], pref: string): number {
    let result = 0;
    for (const word of words) {
        if (word.startsWith(pref)) {
            result++;
        }
    }
    return result;
}
