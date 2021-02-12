function fairCandySwap(A: number[], B: number[]): number[] {
    let sumA = 0;
    const setA = new Set<number>();
    for(let i=0;i<A.length;i++){
        sumA += A[i];
        setA.add(A[i]);
    }
    let sumB = 0;
    let setB = new Set<number>();
    for(let i=0;i<B.length;i++){
        sumB += B[i];
        setB.add(B[i]);
    }

    let diff = (sumB-sumA)/2;
    for(let i=0;i<A.length;i++){
        if(setB.has(A[i]+diff)){
            return [A[i],A[i]+diff];
        }
    }
    return []
};