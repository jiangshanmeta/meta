function canPermutePalindrome (s: string): boolean {
    const map = new Map<string, boolean>();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            map.set(char, !<boolean>map.get(char));
        } else {
            map.set(char, true);
        }
    }
    let hasOdd = false;
    for (const isOdd of map.values()) {
        if (isOdd) {
            if (hasOdd) {
                return false;
            }
            hasOdd = true;
        }
    }
    return true;
}
