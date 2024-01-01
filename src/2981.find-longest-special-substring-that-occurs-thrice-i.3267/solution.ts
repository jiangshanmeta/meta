function maximumLength (s: string): number {
    const maps = new Array<Map<number, number>>(26);
    for (let i = 0; i < 26; i++) {
        maps[i] = new Map<number, number>();
    }
    let index = 0;
    let res = -1;
    while (index < s.length) {
        const char = s[index++];
        let count = 1;
        while (index < s.length && s[index] === char) {
            count++;
            index++;
        }
        if (count >= 3) {
            res = Math.max(res, count - 2);
        }
        const map = maps[char.charCodeAt(0) - 97];
        if (map.has(count - 1)) {
            res = Math.max(res, count - 1);
        }
        if (map.has(count + 1)) {
            res = Math.max(res, count);
        }
        if (map.has(count)) {
            const c = map.get(count)!;
            if (count > 1) {
                res = Math.max(res, count - 1);
            }

            if (c > 1) {
                res = Math.max(res, count);
            }
        }
        map.set(count, map.has(count) ? map.get(count)! + 1 : 1);
    }
    return res;
}
