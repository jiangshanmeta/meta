function beautifulSubstrings (s: string, k: number): number {
    const map = new Map<number, number[]>();
    map.set(0, [-1, ]);
    const set = new Set('aeiou');
    let diff = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        diff += set.has(s[i]) ? 1 : -1;
        if (map.has(diff)) {
            if (k === 1) {
                res += map.get(diff)!.length;
            } else {
                for (const index of map.get(diff)!) {
                    const length = (i - index) / 2;
                    if (length * length % k === 0) {
                        res++;
                    }
                }
            }

            map.get(diff)!.push(i);
        } else {
            map.set(diff, [i, ]);
        }
    }
    return res;
}
