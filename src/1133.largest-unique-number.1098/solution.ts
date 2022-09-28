function largestUniqueNumber (A: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            map.set(A[i], 2);
        } else {
            map.set(A[i], 1);
        }
    }
    let result = -1;
    for (const [num, count, ] of map) {
        if (count === 2) {
            continue;
        }
        result = Math.max(result, num);
    }
    return result;
}
