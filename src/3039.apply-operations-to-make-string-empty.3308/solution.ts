function lastNonEmptyString(s: string): string {
    const counts = new Array<number>(26).fill(0);
    const indexs = new Array<number>(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        counts[code]++;
        indexs[code] = i;
    }
    const MAX_COUNT = Math.max(...counts);
    const result = [];
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === MAX_COUNT) {
            result.push({
                char: String.fromCharCode(i + 97),
                index: indexs[i]
            })
        }
    }

    return result.sort((a, b) => a.index - b.index).map(o => o.char).join('')
};