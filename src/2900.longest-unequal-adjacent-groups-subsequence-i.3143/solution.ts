function getWordsInLongestSubsequence (n: number, words: string[], groups: number[]): string[] {
    const result = [words[0], ];
    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== groups[i - 1]) {
            result.push(words[i]);
        }
    }
    return result;
}
