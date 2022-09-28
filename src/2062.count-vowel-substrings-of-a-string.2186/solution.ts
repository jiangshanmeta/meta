function countVowelSubstrings (word: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', ]);
    let result = 0;
    for (let i = 0; i < word.length - 4; i++) {
        const set = new Set<string>();
        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) {
                break;
            }
            set.add(word[j]);
            if (set.size === 5) {
                result++;
            }
        }
    }
    return result;
}
