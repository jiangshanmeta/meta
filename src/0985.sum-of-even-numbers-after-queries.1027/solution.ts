function sumEvenAfterQueries (A: number[], queries: number[][]): number[] {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if ((A[i] & 1) === 0) {
            sum += A[i];
        }
    }
    const result:number[] = [];
    for (let i = 0; i < queries.length; i++) {
        const [val, index, ] = queries[i];
        if ((A[index] & 1) === 0) {
            sum -= A[index];
        }
        A[index] += val;
        if ((A[index] & 1) === 0) {
            sum += A[index];
        }
        result[i] = sum;
    }
    return result;
}
