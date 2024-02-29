function sumScores(s: string): number {
    const z = new Array<number>(s.length).fill(0);
    let l = 0;
    let r = 0;
    for (let i = 1; i < s.length; i++) {
        let len = r > i ? Math.min(r - i, z[i - l]) : 0;
        while (i + len < s.length && s[i + len] === s[len]) {
            len++;
        }
        if (i + len > r) {
            r = i + len;
            l = i;
        }

        z[i] = len;
    }
    let result = s.length;
    for (let i = 1; i < z.length; i++) {
        result += z[i];
    }
    return result
};