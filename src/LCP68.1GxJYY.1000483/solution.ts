function beautifulBouquet (flowers: number[], cnt: number): number {
    const MOD = 10 ** 9 + 7;
    let left = 0;
    let right = 0;
    const map = new Map<number, number>();
    let result = 0;
    while (left < flowers.length) {
        while (right < flowers.length) {
            const type = flowers[right];
            const count = map.has(type) ? map.get(type)! + 1 : 1;
            if (count > cnt) {
                break;
            }
            map.set(type, count);
            right++;
        }
        result = (result + right - left) % MOD;
        const ltype = flowers[left];
        const lcount = map.get(ltype)! - 1;
        map.set(ltype, lcount);
        left++;
    }

    return result;
}
