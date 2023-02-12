function vowelStrings (words: string[], queries: number[][]): number[] {
    const prefix = new Array<number>(words.length + 1).fill(0);
    const vowelSet = new Set('aeiou');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (vowelSet.has(word[0]) && vowelSet.has(word[word.length - 1])) {
            prefix[i + 1] = prefix[i] + 1;
        } else {
            prefix[i + 1] = prefix[i];
        }
    }

    return queries.map(([l, r, ]) => {
        return prefix[r + 1] - prefix[l];
    });
}
