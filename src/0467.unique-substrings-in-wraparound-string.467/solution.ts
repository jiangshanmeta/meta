function findSubstringInWraproundString(s: string): number {
    const counts = new Array<number>(26).fill(0);
    let len = 0;
    let lastCode = 0;
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;

        if (i > 0 && (code === (lastCode + 1) % 26)) {
            len++;
        } else {
            len = 1;
        }
        lastCode = code;

        counts[code] = Math.max(counts[code], len)
    }

    let result = 0;
    for (let i = 0; i < counts.length; i++) {
        result += counts[i];
    }
    return result
};