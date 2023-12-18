function removeAlmostEqualCharacters (word: string): number {
    let changed = false;
    let prev = word.charCodeAt(0);
    let r = 0;
    for (let i = 1; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if (Math.abs(code - prev) < 2) {
            if (changed) {
                changed = false;
            } else {
                changed = true;
                r++;
            }
        } else {
            changed = false;
        }
        prev = code;
    }
    return r;
}
