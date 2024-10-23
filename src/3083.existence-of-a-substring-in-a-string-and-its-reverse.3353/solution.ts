function isSubstringPresent (s: string): boolean {
    const set = new Set<number>();
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            return true;
        }
        const n = (s.charCodeAt(i) - 97) * 26 + s.charCodeAt(i + 1) - 97;
        const rn = (s.charCodeAt(i + 1) - 97) * 26 + s.charCodeAt(i) - 97;
        if (set.has(rn)) {
            return true;
        }
        set.add(n);
    }
    return false;
}
