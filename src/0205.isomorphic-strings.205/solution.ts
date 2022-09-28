function isIsomorphic (s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const s2tMap = new Map<string, string>();
    const t2sMap = new Map<string, string>();
    for (let i = 0; i < s.length; i++) {
        const has1 = s2tMap.has(s[i]);
        const has2 = t2sMap.has(t[i]);
        if (has1 && has2) {
            const s2t = <string>s2tMap.get(s[i]);
            const t2s = <string>t2sMap.get(t[i]);
            if (s2t !== t[i] || t2s !== s[i]) {
                return false;
            }
        } else if (!has1 && !has2) {
            s2tMap.set(s[i], t[i]);
            t2sMap.set(t[i], s[i]);
        } else {
            return false;
        }
    }
    return true;
}
