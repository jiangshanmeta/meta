function smallestRangeI(A: number[], K: number): number {
    let min = A[0];
    let max = A[0];
    for(let i=1;i<A.length;i++){
        min = Math.min(min,A[i]);
        max = Math.max(max,A[i]);
    }
    const diff = (max-K)-(min+K);
    return Math.max(0,diff);
};