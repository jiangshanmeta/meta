function longestWord (words: string[]): string {
    words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a < b ? 1 : -1;
    });

    let result = '';
    const trie:any = {};
    const search = (word:string, index:number, prev:any):boolean => {
        while (index < word.length) {
            if (prev.__end && search(word, index, trie)) {
                return true;
            }

            if (!prev[word[index]]) {
                return false;
            }
            prev = prev[word[index++]];
        }
        return !!prev.__end;
    };

    const insert = (word:string) => {
        let prev = trie;
        for (let i = 0; i < word.length; i++) {
            if (!prev[word[i]]) {
                prev[word[i]] = {};
            }
            prev = prev[word[i]];
        }
        prev.__end = true;
    };

    for (const word of words) {
        if (search(word, 0, trie)) {
            result = word;
        }
        insert(word);
    }

    return result;
}
