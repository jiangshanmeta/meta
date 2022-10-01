function largestPalindromic (num: string): string {
    const counts = new Array<number>(10).fill(0);
    for (const c of num) {
        counts[c]++;
    }
    let prefix = '';
    let suffix = '';
    let maxRest = -1;
    for (let i = 9; i > -1; i--) {
        if (i === 0 && prefix === '') {
            if (maxRest !== -1) {
                return `${maxRest}`;
            }
            return '0';
        }
        const half = counts[i] >> 1;
        prefix = `${prefix}${String(i).repeat(half)}`;
        suffix = `${String(i).repeat(half)}${suffix}`;
        if (maxRest === -1 && counts[i] % 2 === 1) {
            maxRest = i;
        }
    }
    if (maxRest !== -1) {
        return `${prefix}${maxRest}${suffix}`;
    }

    return `${prefix}${suffix}`;
}
