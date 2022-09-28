function kthGrammar (N: number, K: number): number {
    return helper(N, K - 1);
}

function helper (N:number, K:number) {
    if (N === 1) {
        return 0;
    }
    const parent = helper(N - 1, K >> 1);
    if (parent === 0) {
        return K & 1;
    } else {
        return (K & 1) ^ 1;
    }
}
