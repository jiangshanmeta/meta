function maxScore (s: string): number {
    let one = 0;
    for (const c of s) {
        if (c === '1') {
            one++;
        }
    }
    let result = 0;
    let zero = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zero++;
        } else {
            one--;
        }
        result = Math.max(result, zero + one);
    }
    return result;
}
