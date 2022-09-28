function countPairs (deliciousness: number[]): number {
    const map = new Map<number, number>();
    const set:number[] = [];
    let max = 0;
    for (const num of deliciousness) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            set.push(num);
            map.set(num, 1);
            max = Math.max(max, num);
        }
    }

    set.sort((a, b) => a - b);

    let base = 1;
    let result = 0;
    const mod = 10 ** 9 + 7;
    while (base <= 2 * max) {
        for (let i = 0; i < set.length; i++) {
            const num = set[i];
            const rest = base - num;

            if (rest < num) {
                break;
            }

            if (num === rest) {
                const count = map.get(num)!;
                result = (result + count * (count - 1) / 2) % mod;
            } else if (map.has(rest)) {
                result = (result + map.get(num)! * map.get(rest)!) % mod;
            }
        }
        base *= 2;
    }

    return result;
}
