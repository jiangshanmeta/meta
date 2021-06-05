function countElements (arr: number[]): number {
    const map = new Map<number, number>();
    for (const num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    let result = 0;
    for (const num of map.keys()) {
        if (!map.has(num + 1)) {
            continue;
        }
        result += map.get(num);
    }
    return result;
}
