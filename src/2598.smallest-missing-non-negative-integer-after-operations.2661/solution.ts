function findSmallestInteger (nums: number[], value: number): number {
    const map = new Map<number, number>();
    const flags = new Array(nums.length).fill(false);
    for (const num of nums) {
        let mod = num % value;
        if (mod < 0) {
            mod += value;
        }
        if (map.has(mod)) {
            const index = map.get(mod)!;
            if (mod < flags.length) {
                flags[index] = true;
                map.set(mod, index + value);
            }
        } else {
            flags[mod] = true;
            map.set(mod, mod + value);
        }
    }
    for (let i = 0; i < flags.length; i++) {
        if (!flags[i]) {
            return i;
        }
    }
    return flags.length;
}
