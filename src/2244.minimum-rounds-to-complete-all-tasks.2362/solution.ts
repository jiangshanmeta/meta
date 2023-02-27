function minimumRounds (tasks: number[]): number {
    const map = new Map<number, number>();
    for (const num of tasks) {
        const count = map.has(num) ? map.get(num)! + 1 : 1;
        map.set(num, count);
    }
    let result = 0;
    for (const num of map.values()) {
        if (num === 1) {
            return -1;
        }
        const mod = num % 3;
        result += (num - mod) / 3;
        if (mod !== 0) {
            result++;
        }
    }
    return result;
}
