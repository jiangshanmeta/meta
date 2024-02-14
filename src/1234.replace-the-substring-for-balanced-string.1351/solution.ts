function balancedString(s: string): number {
    const map = new Map<string, number>();
    map.set('Q', 0);
    map.set('W', 1);
    map.set('E', 2);
    map.set('R', 3)
    const counts = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i++) {
        counts[map.get(s[i])!]++
    }
    const Target = s.length >> 2;
    const mores = counts.map((count) => count - Target)
    let notMatch = 0;
    for (let i = 0; i < mores.length; i++) {
        if (mores[i] > 0) {
            notMatch++;
        }
    }
    if (notMatch === 0) {
        return 0;
    }
    let left = 0;
    let right = 0;
    let result = s.length;
    while (left < s.length) {
        while (right < s.length && notMatch > 0) {
            const index = map.get(s[right++])!;
            mores[index]--;
            if (mores[index] === 0) {
                notMatch--;
            }
        }
        if (notMatch === 0) {
            result = Math.min(result, right - left)
        }

        const lIndex = map.get(s[left++])!;
        mores[lIndex]++;
        if (mores[lIndex] === 1) {
            notMatch++;
        }

    }

    return result
};