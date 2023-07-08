function maximumNumberOfStringPairs (words: string[]): number {
    const rwords = words.map(word => word.split('').reverse().join(''));
    const set = new Set(rwords);
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        set.delete(rwords[i]);
        if (set.has(words[i])) {
            result++;
        }
    }
    return result;
}
