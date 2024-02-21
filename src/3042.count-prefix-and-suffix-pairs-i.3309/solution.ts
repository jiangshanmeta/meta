function countPrefixSuffixPairs(words: string[]): number {
    const map = new Map<string, number>();
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        const next = getNext(words[i]);
        let length = next[next.length - 1];
        while (length > 0) {
            const str = words[i].slice(0, length);
            if (map.has(str)) {
                result += map.get(str)!;
            }
            length = next[length - 1];
        }

        if (map.has(words[i])) {
            result += map.get(words[i])!;
        }

        if (map.has(words[i])) {
            map.set(words[i], map.get(words[i])! + 1)
        } else {
            map.set(words[i], 1)
        }
    }
    return result
};

function getNext(pattern: string) {
    const next = new Array<number>(pattern.length).fill(0);
    let count = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (count > 0 && pattern[count] !== pattern[i]) {
            count = next[count - 1];
        }
        if (pattern[i] === pattern[count]) {
            count++;
        }
        next[i] = count;
    }
    return next;
}