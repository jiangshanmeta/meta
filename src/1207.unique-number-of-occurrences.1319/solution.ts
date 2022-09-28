function uniqueOccurrences (arr: number[]): boolean {
    const numCountMap = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        if (numCountMap.has(arr[i])) {
            numCountMap.set(arr[i], <number>numCountMap.get(arr[i]) + 1);
        } else {
            numCountMap.set(arr[i], 1);
        }
    }
    const set = new Set<number>();
    for (const count of numCountMap.values()) {
        if (set.has(count)) {
            return false;
        }
        set.add(count);
    }
    return true;
}
