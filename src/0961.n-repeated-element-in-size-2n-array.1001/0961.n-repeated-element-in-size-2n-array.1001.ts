function repeatedNTimes(A: number[]): number {
    const set = new Set<number>();
    for(let i=0;i<A.length;i++){
        if(set.has(A[i])){
            return A[i];
        }
        set.add(A[i]);
    }
    return 0;
};