function vowelStrings (words: string[], left: number, right: number): number {
    let result = 0;
    const set = new Set(['a', 'e', 'i', 'o', 'u', ]);
    for (let i = left; i <= right; i++) {
        const word = words[i];
        if (set.has(word[0]) && set.has(word[word.length - 1])) {
            result++;
        }
    }
    return result;
}
