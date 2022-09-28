function countVowels (word: string): number {
    let result = 0;
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', ]);
    for (let i = 0; i < word.length; i++) {
        if (vowelSet.has(word[i])) {
            result += (i + 1) * (word.length - i);
        }
    }
    return result;
}
