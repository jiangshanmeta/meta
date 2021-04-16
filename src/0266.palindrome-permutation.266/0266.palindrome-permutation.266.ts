function canPermutePalindrome (s: string): boolean {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let hasOdd = false;
    for (const count of map.values()) {
        if (count & 1) {
            if (hasOdd) {
                return false;
            }
            hasOdd = true;
        }
    }
    return true;
}
