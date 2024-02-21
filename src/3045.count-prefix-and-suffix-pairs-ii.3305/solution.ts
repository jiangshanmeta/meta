function countPrefixSuffixPairs(words: string[]): number {
    const root: any = {};
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let prev = root;
        for (let j = 0; j < word.length; j++) {
            const key = word[j] + word[word.length - j - 1];
            if (!prev[key]) {
                prev[key] = {
                    __count: 0,
                    __end: false,
                }
            }
            prev = prev[key];
            if (prev.__end) {
                result += prev.__count;
            }

        }

        prev.__count++;
        prev.__end = true;
    }
    return result
};