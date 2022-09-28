function numberOfPairs (nums: number[]): number[] {
    const map = new Map<number, number>();
    let pairCount = 0;
    let restCount = 0;
    for (const num of nums) {
        const count = map.has(num) ? map.get(num) : 0;
        if (count === 1) {
            pairCount++;
            restCount--;
            map.set(num, 0);
        } else {
            restCount++;
            map.set(num, 1);
        }
    }
    return [pairCount, restCount, ];
}
