function findLucky (arr: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i])! + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    let result = -1;
    for (const [num, count, ] of map.entries()) {
        if (num !== count) {
            continue;
        }
        result = Math.max(result, num);
    }
    return result;
}
