function checkRecord (s: string): boolean {
    let aCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            if (aCount > 0) {
                return false;
            }
            aCount++;
        } else if (s[i] === 'L' && i > 1 && s[i - 1] === 'L' && s[i - 2] === 'L') {
            return false;
        }
    }
    return true;
}
