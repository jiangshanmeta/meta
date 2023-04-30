function getDistances (arr: number[]): number[] {
    const map = new Map<number, [number, number, number, number]>();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], [0, i, 0, 1, ]);
        } else {
            const info = map.get(arr[i])!;
            info[1] += i;
            info[3]++;
        }
    }
    const result = new Array<number>(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        const info = map.get(arr[i])!;
        info[0] += i;
        info[1] -= i;
        info[2]++;
        info[3]--;
        result[i] = i * info[2] - info[0] + info[1] - i * info[3];
    }

    return result;
}
