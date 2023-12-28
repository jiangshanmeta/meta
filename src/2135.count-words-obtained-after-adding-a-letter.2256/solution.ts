function wordCount (startWords: string[], targetWords: string[]): number {
    const MAX_LEN = Math.max(...startWords.map(item => item.length));
    let res = 0;
    const setsByLength = new Array<Set<number>>(MAX_LEN + 1);
    for (const word of startWords) {
        const binary = toBinary(word);
        if (!setsByLength[word.length]) {
            setsByLength[word.length] = new Set<number>();
        }
        setsByLength[word.length].add(binary);
    }

    for (const word of targetWords) {
        if (!setsByLength[word.length - 1]) {
            continue;
        }
        const set = setsByLength[word.length - 1];
        let binary = toBinary(word);
        let after = 0;

        while (binary > 0) {
            const remove1 = binary & (binary - 1);
            if (set.has(remove1 | after)) {
                break;
            }
            after |= (binary & (-binary));
            binary = remove1;
        }
        if (binary) {
            res++;
        }
    }

    return res;
}

function toBinary (s:string) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res |= (1 << (s.charCodeAt(i) - 97));
    }
    return res;
}
