function largestSumAfterKNegations (A: number[], K: number): number {
    A.sort((a, b) => a - b);
    let index = 0;
    while (index < A.length && K > 0 && A[index] < 0) {
        A[index] = -A[index];
        index++;
        K--;
    }
    K %= 2;
    if (K === 1) {
        let i = index;
        const minval = A[i];
        if (index + 1 < A.length && A[index + 1] < minval) {
            i = index + 1;
        }
        if (index - 1 > -1 && A[index - 1] < minval) {
            i = index - 1;
        }
        A[i] = -A[i];
    }
    return A.reduce((sum, item) => {
        return sum + item;
    }, 0);
}
