function sumPrefixScores (words: string[]): number[] {
    const trie:any = {};
    for (const word of words) {
        let prev = trie;
        for (let i = 0; i < word.length; i++) {
            if (!prev[word[i]]) {
                prev[word[i]] = {
                    __count: 1,
                };
            } else {
                prev[word[i]].__count++;
            }
            prev = prev[word[i]];
        }
    }
    return words.map((word) => {
        let prev = trie;
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (!prev[word[i]]) {
                break;
            }
            count += prev[word[i]].__count;
            prev = prev[word[i]];
        }

        return count;
    });
}
