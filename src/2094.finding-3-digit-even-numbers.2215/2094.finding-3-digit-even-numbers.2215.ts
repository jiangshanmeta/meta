function findEvenNumbers (digits: number[]): number[] {
    const counts = new Array<number>(10).fill(0);
    for (const digit of digits) {
        counts[digit]++;
    }
    const result:number[] = [];
    const backTracking = (num:number, rest:number) => {
        for (let i = rest === 3 ? 1 : 0; i < 10; i++) {
            if (counts[i] === 0) {
                continue;
            }
            if (rest === 1) {
                if (i % 2 !== 0) {
                    continue;
                }
                result.push(num * 10 + i);
            } else {
                counts[i]--;
                backTracking(num * 10 + i, rest - 1);
                counts[i]++;
            }
        }
    };
    backTracking(0, 3);
    return result;
}
