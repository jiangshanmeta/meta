function countPalindromicSubsequence (s: string): number {
    const set1 = new Set<string>();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (set1.has(s[i])) {
            continue;
        }
        set1.add(s[i]);
        let j = s.length - 1;
        while (j > i && s[j] !== s[i]) {
            j--;
        }
        if (j - i < 2) {
            continue;
        }
        const set2 = new Set<string>();
        for (let k = i + 1; k < j; k++) {
            if (set2.has(s[k])) {
                continue;
            }
            set2.add(s[k]);
            result++;
        }
    }
    return result;
}
