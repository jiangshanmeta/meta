function findThePrefixCommonArray (A: number[], B: number[]): number[] {
    const N = A.length;
    const counts = new Array<number>(N + 1).fill(0);
    const result = new Array<number>(A.length);
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        counts[A[i]]++;
        counts[B[i]]++;
        if (counts[A[i]] === 2) {
            count++;
        }
        if (counts[B[i]] === 2) {
            count++;
        }
        if (A[i] === B[i]) {
            count--;
        }
        result[i] = count;
    }
    return result;
}
