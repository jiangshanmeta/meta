function shortestSeq (big: number[], small: number[]): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < small.length; i++) {
        map.set(small[i], map.has(small[i]) ? map.get(small[i])! + 1 : 1);
    }
    const curMap = new Map<number, number>();
    const M = map.size;
    let left = 0;
    let right = 0;
    let rs = -1;
    let re = big.length;
    let match = 0;
    while (left < big.length) {
        while (right < big.length && match < M) {
            if (map.has(big[right])) {
                const count = curMap.has(big[right]) ? curMap.get(big[right])! + 1 : 1;
                const needCount = map.get(big[right]);
                if (count === needCount) {
                    match++;
                }
                curMap.set(big[right], count);
            }
            right++;
        }
        if (match === M) {
            const L = right - left;
            if (L < re - rs) {
                rs = left;
                re = right;
            }
        }

        if (curMap.has(big[left])) {
            const count = curMap.get(big[left])!;
            if (count === map.get(big[left])) {
                match--;
            }
            curMap.set(big[left], count - 1);
        }

        left++;
    }

    if (rs === -1) {
        return [];
    }
    return [rs, re - 1, ];
}
