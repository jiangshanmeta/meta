function beautifulSubstrings (s: string, k: number): number {
    const vowels = new Array<number>(s.length + 1);
    const set = new Set('aeiou');
    vowels[0] = 0;
    for (let i = 0; i < s.length; i++) {
        vowels[i + 1] = vowels[i] + (set.has(s[i]) ? 1 : 0);
    }

    let r = 0;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            const c1 = vowels[j + 1] - vowels[i];
            const c2 = j - i + 1 - c1;
            if (c1 !== c2 || c1 * c2 % k !== 0) {
                continue;
            }
            r++;
        }
    }
    return r;
}
