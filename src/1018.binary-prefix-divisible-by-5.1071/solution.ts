function prefixesDivBy5 (A: number[]): boolean[] {
    let prefix = 0;
    const result:boolean[] = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
        prefix = (prefix * 2 + A[i]) % 5;
        result[i] = prefix === 0;
    }
    return result;
}
