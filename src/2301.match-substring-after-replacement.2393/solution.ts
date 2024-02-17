function matchReplacement(s: string, sub: string, mappings: string[][]): boolean {
    const map = new Map<string, string[]>()
    for (const [from, to] of mappings) {
        if (map.has(from)) {
            map.get(from)!.push(to);
        } else {
            map.set(from, [to]);
        }

    }
    for (let i = sub.length - 1; i < s.length; i++) {
        let start = i - sub.length + 1;
        let index = 0;

        while (start <= i) {
            if (s[start] === sub[index] || (map.get(sub[index])?.includes(s[start]))) {
                start++;
                index++;
            } else {
                break;
            }
        }
        if (start > i) {
            return true;
        }
    }
    return false;
};