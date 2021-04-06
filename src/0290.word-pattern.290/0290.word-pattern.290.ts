function wordPattern (pattern: string, s: string): boolean {
    const sList = s.split(' ');
    if (pattern.length !== sList.length) {
        return false;
    }
    const p2s = new Map<string, string>();
    const s2p = new Map<string, string>();
    for (let i = 0; i < pattern.length; i++) {
        const has1 = p2s.has(pattern[i]);
        const has2 = s2p.has(sList[i]);
        if (has1 && has2) {
            if (p2s.get(pattern[i]) === sList[i] && s2p.get(sList[i]) === pattern[i]) {
                continue;
            }
            return false;
        } else if (!has1 && !has2) {
            p2s.set(pattern[i], sList[i]);
            s2p.set(sList[i], pattern[i]);
        } else {
            return false;
        }
    }
    return true;
}
