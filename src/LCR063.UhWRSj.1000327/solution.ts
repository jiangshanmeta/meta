function replaceWords (dictionary: string[], sentence: string): string {
    const prefixTree:Record<string, any> = {};
    dictionary.forEach((word) => {
        let root = prefixTree;
        for (const c of word) {
            if (!root[c]) {
                root[c] = {};
            }
            root = root[c];
        }
        root.__end = true;
    });

    return sentence.split(' ').map((word) => {
        let root = prefixTree;
        for (let i = 0; i < word.length; i++) {
            if (!root[word[i]]) {
                return word;
            }
            if (root[word[i]].__end) {
                return word.slice(0, i + 1);
            }
            root = root[word[i]];
        }

        return word;
    }).join(' ');
}
