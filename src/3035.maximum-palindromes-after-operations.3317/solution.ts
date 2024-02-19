function maxPalindromesAfterOperations(words: string[]): number {
    const counts = new Array<number>(26).fill(0);
    for (const str of words) {
        for (let i = 0; i < str.length; i++) {
            counts[str.charCodeAt(i) - 97]++
        }
    }
    let pairs = 0;
    for (let i = 0; i < 26; i++) {
        pairs += (counts[i] >> 1)
    }
    let result = 0;
    words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < words.length; i++) {
        const c = words[i].length >> 1;
        if (c > pairs) {
            break;
        }
        result++;
        pairs -= c;

    }

    return result
};