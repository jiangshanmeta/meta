function findLonely (nums: number[]): number[] {
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, 2);
        } else {
            map.set(num, 1);
        }
    }
    const result = [];
    for (const [num, count, ] of map) {
        if (count === 1 && !map.has(num - 1) && !map.has(num + 1)) {
            result.push(num);
        }
    }
    return result;
}
