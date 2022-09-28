function CheckPermutation (s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }
    const map = new Map<string, number>();
    for (const char of s1) {
        if (map.has(char)) {
            map.set(char, <number>map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    for (const char of s2) {
        if (!map.has(char)) {
            return false;
        }
        const count = <number>map.get(char);
        if (count === 0) {
            return false;
        }
        map.set(char, count - 1);
    }

    return true;
}
