function singleNumber (nums: number[]): number {
    const map = new Map<number, number>();
    for (const num of nums) {
        const count = map.has(num) ? map.get(num)! + 1 : 1;
        map.set(num, count);
    }
    for (const [num, count, ] of map) {
        if (count === 1) {
            return num;
        }
    }
    return 0;
}
